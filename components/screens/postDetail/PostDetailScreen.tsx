import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import { Weather, Alert } from "@/components/common/index";
import { Colors } from "@/constants/Colors";
import { RouteNames } from "@/typings/StackParam";
import { useRoute } from "@react-navigation/native";
import {
  Header,
  Post,
  ImageBox,
  PostContent,
  MapDetail,
  SeeDetail,
  TagList,
  CommentHeader,
  CommentList,
  OverLay,
  BottomSheetContent,
} from "@/components/layouts/postDetail/index";
import BottomSheet from "@gorhom/bottom-sheet";
import { PostType } from "@/typings/heatLevels";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { IPostDetail } from "@/typings/post";
import { fetchPost } from "@/api/post";
import { tokenAtom } from "@/state/atoms/login";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { isLoadingAtom } from "@/state/atoms/loading";
import { postsAtom, postAtom } from "@/state/atoms/post";
import { fetchPosts, deletePost } from "@/api/post";

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    post_id: number;
    post_type: PostType;
  };
};

const PostDetailScreen: React.FC = () => {
  const token = useRecoilValue(tokenAtom);
  console.log(token);
  const navigation = useNavigation<ScreenNavigationProp>();
  const route = useRoute<RouteType>();
  const {
    params: { post_id, post_type },
  } = route;

  const setIsLoading = useSetRecoilState(isLoadingAtom);
  const [posts, setPosts] = useRecoilState(postsAtom);

  const [post, setPost] = useRecoilState(postAtom);

  const handleFetchPostApi = async () => {
    const res = await fetchPost({ token, postId: post_id });
    setPost(res.data);
  };

  useEffect(() => {
    handleFetchPostApi();
  }, [post_id]);

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["25%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    if (index === -1) {
      setIsBottomSheetVisible(false);
    }
  }, []);

  const handleShowBottomSheet = useCallback(() => {
    setIsBottomSheetVisible(true);
    bottomSheetRef.current?.expand(); // Use expand method here
  }, []);

  const handleOptionTap = async (toDo: "edit" | "delete") => {
    if (toDo === "edit") {
      navigation.navigate("PostEdit", {
        post_id: post_id,
        post_type: post_type,
        write_type: "edit",
      });
    } else {
      setIsLoading(true);
      const res = await deletePost({ postId: post?.id!, token: token! });
      const resPosts = await fetchPosts({
        page: 1,
        limit: 10,
        type: post_type,
      });
      setPosts(resPosts.data);
      navigation.goBack();
      setIsLoading(false);
    }
    // Close the BottomSheet
    bottomSheetRef.current?.collapse(); // Use collapse method here
    // Hide the BottomSheet (and the Overlay)
    setIsBottomSheetVisible(false);
  };

  const handleOverlayTap = useCallback(() => {
    // Close the BottomSheet
    bottomSheetRef.current?.collapse(); // Use collapse method here
    // Hide the BottomSheet (and the Overlay)
    setIsBottomSheetVisible(false);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Weather />
        <View style={styles.content}>
          {post && (
            <Header onEllipsisPress={handleShowBottomSheet} post={post} />
          )}
          {post && <Post post={post} setPost={setPost} />}
          {post && <ImageBox post={post} />}
          {post && <PostContent post={post} />}
          {/* {post_type === "tip" && <MapDetail />} */}
          <MapDetail />
          <SeeDetail />
          {post && <TagList post={post} />}
          {post && <CommentHeader post={post} />}
          {post && <CommentList post={post} />}
        </View>
      </ScrollView>
      {isBottomSheetVisible && <OverLay onTap={handleOverlayTap} />}
      {isBottomSheetVisible && (
        <BottomSheet
          ref={bottomSheetRef}
          index={0} // This sets the initial snap point to 25%
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose={true} // This allows users to close the sheet
        >
          <BottomSheetContent onOptionTap={handleOptionTap} />
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    padding: 16,
  },
});

export default PostDetailScreen;
