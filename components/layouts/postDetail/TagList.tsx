import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { IPostDetail } from "@/typings/post";

interface TagListProps {
  post: IPostDetail;
}

const TagList: React.FC<TagListProps> = ({ post }) => {
  const { tagItems } = post;
  return (
    <View style={styles.container}>
      {tagItems.map((item, idx) => {
        return (
          <View key={idx} style={styles.tagContainer}>
            <Text>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: "row",
  },
  tagContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Colors.postBorder,
    marginRight: 8,
    borderRadius: 8,
  },
  tagText: {
    color: Colors.black,
  },
});

export default TagList;
