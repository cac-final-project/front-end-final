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
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoggedInAtom, loginInfoAtom } from "@/state/atoms/login";
import { fetchPosts } from "@/api/post";
import { IPost } from "@/typings/post";
import { isLoadingAtom } from "@/state/atoms/loading";

const AddPostIcon = require("@/assets/images/AddPost.png");

export type headerTabType = "tip" | "campaign";

const PostsScreen: React.FC = () => {
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const loginInfo = useRecoilValue(loginInfoAtom);
  const navigation = useNavigation<ScreenNavigationProp>();
  const [headerTab, setHeaderTab] = useState<headerTabType>("tip");

  const [posts, setPosts] = useState<IPost[]>([]);

  const handleFetchPostsApi = async () => {
    setIsLoading(true);
    const res = await fetchPosts({ page: 1, limit: 10, type: headerTab });
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

  const handleShowBottomSheet = useCallback(() => {
    setIsBottomSheetVisible(true);
    bottomSheetRef.current?.expand(); // Use expand method here
  }, []);

  const handleOptionTap = useCallback((toDo: "edit" | "delete") => {
    if (toDo === "edit") {
      navigation.navigate("PostEdit", {
        post_id: 0,
        post_type: "tip",
        write_type: "edit",
      });
    } else {
    }
    // Close the BottomSheet
    bottomSheetRef.current?.collapse(); // Use collapse method here
    // Hide the BottomSheet (and the Overlay)
    setIsBottomSheetVisible(false);
  }, []);

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
            const { author, profile_img } = item;
            console.log(profile_img);
            const isAuthor = author === loginInfo.username ? true : false;
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
