import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { IPostDetail } from "@/typings/post";

interface CommentHeaderProps {
  post: IPostDetail;
}

const CommentHeader: React.FC<CommentHeaderProps> = ({ post }) => {
  const { comments } = post;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comments ({comments.length})</Text>
      <TouchableOpacity>
        <Text style={styles.writeText}>Write Comment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 12,
  },
  writeText: {
    color: Colors.primary,
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 12,
  },
});

export default CommentHeader;
