import React, { useState, useRef, useCallback, useMemo } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Weather, Alert } from "@/components/layouts/resources/index";
import {
  HeaderTab,
  Post,
  Overlay,
  BottomSheetContent,
} from "@/components/layouts/posts/index";
import { Colors } from "@/constants/Colors";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";

const AddPostIcon = require("@/assets/images/AddPost.png");

export type headerTabType = "tips" | "campaigns";

const PostsScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const [headerTab, setHeaderTab] = useState<headerTabType>("tips");
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
    console.log("hi");
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Weather />
        <HeaderTab headerTab={headerTab} setHeaderTab={setHeaderTab} />
        <View style={styles.postContainer}>
          {[
            {
              id: 0,
              profile_img:
                "https://res.cloudinary.com/djehfg3yk/image/upload/v1696151625/file-upload/1696151623996-KakaoTalk_20230218_194526049_02_pedm6t.jpg",
              isAuthor: true,
            },
            {
              id: 1,
              profile_img: "",
              isAuthor: false,
            },
            {
              id: 2,
              profile_img: "",
              isAuthor: false,
            },
            {
              id: 3,
              profile_img: "",
              isAuthor: false,
            },
            {
              id: 4,
              profile_img: "",
              isAuthor: false,
            },
          ].map((item) => {
            return (
              <Post
                key={item.id}
                post_id={item.id}
                profile_img={item.profile_img}
                isAuthor={item.isAuthor}
                onEllipsisPress={handleShowBottomSheet}
              />
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity>
        <Image source={AddPostIcon} style={styles.addPostButton} />
      </TouchableOpacity>
      {isBottomSheetVisible && <Overlay onTap={handleOverlayTap} />}
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
