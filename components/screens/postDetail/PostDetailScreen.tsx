import React from "react";
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
import { post_type } from "@/typings/heatLevels";

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    post_id: number;
    post_type: post_type;
  };
};

const PostDetailScreen: React.FC = () => {
  const route = useRoute<RouteType>();
  const {
    params: { post_id, post_type },
  } = route;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Weather />
        <View style={styles.content}>
          <Header onEllipsisPress={() => {}} />
          <Post
            profile_img={""}
            post_id={0}
            isAuthor={true}
            onEllipsisPress={() => {}}
          />
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
