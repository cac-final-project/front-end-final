import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native"; // Import ScrollView instead of TextInput
import { Colors } from "@/constants/Colors";
import { IPostDetail } from "@/typings/post";

interface PostContentProps {
  post: IPostDetail;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  const { content } = post;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.contentText}>{content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  scrollView: {
    width: "100%",
  },
  contentText: {
    color: "#171717",
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0.39,
    textAlign: "justify",
  },
});

export default PostContent;
