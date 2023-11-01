import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Weather } from "@/components/common/index";
import {
  HeaderTab,
  Post,
  OverLay,
  BottomSheetContent,
} from "@/components/layouts/posts/index";
import { Colors } from "@/constants/Colors";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { isLoggedInAtom, loginInfoAtom, tokenAtom } from "@/state/atoms/login";
import { fetchPosts, deletePost } from "@/api/post";
import { isLoadingAtom } from "@/state/atoms/loading";
import { postsAtom } from "@/state/atoms/post";

const AddPostIcon = require("@/assets/images/AddPost.png");

export type headerTabType = "tip" | "campaign";

const PostsScreen: React.FC = () => {
  const token = useRecoilValue(tokenAtom);
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const loginInfo = useRecoilValue(loginInfoAtom);
  const navigation = useNavigation<ScreenNavigationProp>();
  const [headerTab, setHeaderTab] = useState<headerTabType>("tip");

  const [posts, setPosts] = useRecoilState(postsAtom);

  // edit or delete
  const [postSelected, setPostSelected] = useState<number | null>(null);

  const handleFetchPostsApi = async () => {
    setIsLoading(true);
    const res = await fetchPosts({
      page: 1,
      limit: 10,
      type: headerTab,
      token,
    });
    setPosts(res.data);
    setIsLoading(false);
  };
  useEffect(() => {
    handleFetchPostsApi();
  }, [headerTab]);

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["25%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    if (index === -1) {
      setIsBottomSheetVisible(false);
    }
  }, []);

  const handleShowBottomSheet = useCallback((postId: number) => {
    setPostSelected(postId);
    setIsBottomSheetVisible(true);
    bottomSheetRef.current?.expand(); // Use expand method here
  }, []);

  const handleOptionTap = async (toDo: "edit" | "delete") => {
    if (isLoggedIn) {
      if (toDo === "edit") {
        navigation.navigate("PostEdit", {
          post_id: postSelected!,
          post_type: headerTab,
          write_type: "edit",
        });
      } else {
        setIsLoading(true);
        const res = await deletePost({ postId: postSelected!, token: token! });
        const resPosts = await fetchPosts({
          page: 1,
          limit: 10,
          type: headerTab,
        });
        setPosts(resPosts.data);
        setIsLoading(false);
      }
      // Close the BottomSheet
      bottomSheetRef.current?.collapse(); // Use collapse method here
      // Hide the BottomSheet (and the Overlay)
      setIsBottomSheetVisible(false);
    } else {
      alert("you must be logged in!");
    }
  };

  const handleOverlayTap = useCallback(() => {
    // Close the BottomSheet
    bottomSheetRef.current?.collapse(); // Use collapse method here
    // Hide the BottomSheet (and the Overlay)
    setIsBottomSheetVisible(false);
  }, []);

  const handleWritePost = () => {
    if (isLoggedIn) {
      if (loginInfo.type === "neighbor" && headerTab === "campaign") {
        Alert.alert(
          "Restricted Access",
          "Only volunteers can create campaigns.",
          [
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            },
          ],
          { cancelable: false }
        );
      } else {
        navigation.navigate("PostEdit", {
          post_type: headerTab,
          write_type: "write",
        });
      }
    } else {
      Alert.alert(
        "Login Required",
        "You need to login to continue. Move to login page?",
        [
          {
            text: "Yes",
            onPress: () => navigation.navigate("Login"),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Weather />
        <HeaderTab headerTab={headerTab} setHeaderTab={setHeaderTab} />
        <View style={styles.postContainer}>
          {posts.map((item, idx) => {
            const { author } = item;
            console.log(typeof author, "author", author.length);
            console.log(
              typeof loginInfo.username,
              "username",
              loginInfo.username.length
            );
            const isAuthor =
              author.trim() === loginInfo.username.trim() ? true : false;
            console.log(isAuthor);
            return (
              <Post
                key={item.id}
                post_id={idx}
                item={item}
                isAuthor={isAuthor}
                onEllipsisPress={handleShowBottomSheet}
              />
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleWritePost} style={styles.addPostButton}>
        <Image source={AddPostIcon} />
      </TouchableOpacity>
      {isBottomSheetVisible && <OverLay onTap={handleOverlayTap} />}
      {isBottomSheetVisible && (
        <BottomSheet
          ref={bottomSheetRef}
          index={0} // This sets the initial snap point to 25%
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose={true} // This allows users to close the sheet
        >
          <BottomSheetContent
            onOptionTap={handleOptionTap}
            postSelected={postSelected}
          />
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
  scrollContainer: {},
  postContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  addPostButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default PostsScreen;
