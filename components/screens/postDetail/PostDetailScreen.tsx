import React, { useState, useRef, useCallback, useMemo } from "react";
import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import { Weather, Alert } from "@/components/layouts/resources/index";
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
} from "@/components/layouts/postDetail/index";
import { OverLay, BottomSheetContent } from "@/components/common/post";
import BottomSheet from "@gorhom/bottom-sheet";
import { PostType } from "@/typings/heatLevels";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    post_id: number;
    post_type: PostType;
  };
};

const PostDetailScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const route = useRoute<RouteType>();
  const {
    params: { post_id, post_type },
  } = route;

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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Weather />
        <View style={styles.content}>
          <Header onEllipsisPress={handleShowBottomSheet} />
          <Post profile_img={""} post_id={0} isAuthor={true} />
          <ImageBox />
          <PostContent />
          {/* {post_type === "tip" && <MapDetail />} */}
          <MapDetail />
          <SeeDetail />
          <TagList />
          <CommentHeader />
          <CommentList />
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
