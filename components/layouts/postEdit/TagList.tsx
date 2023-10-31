import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNavigationProp, RouteNames } from "@/typings/StackParam";
import { PostType, WriteType } from "@/typings/heatLevels";

const TagIcon = require("@/assets/images/write/Tag.png");

interface TagListProps {
  tags: string[];
}

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    post_id?: number;
    post_type: PostType;
    write_type: WriteType;
  };
};

const TagList: React.FC<TagListProps> = ({ tags }) => {
  const route = useRoute<RouteType>();
  const {
    params: { post_type, write_type },
  } = route;
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const handleTagsOpen = () => {
    navigate("PostEditTags", { post_type, write_type });
  };
  return (
    <TouchableOpacity onPress={handleTagsOpen}>
      <View style={styles.InputWrapper}>
        <Image source={TagIcon} />
        <Text style={styles.categoryLocationTitle}>Tags</Text>
        <View style={styles.tagContainer}>
          {tags.length !== 0 ? (
            tags.map((item, idx) => {
              return (
                <View style={styles.tag}>
                  <Text key={item} style={styles.tagText}>
                    {item}
                  </Text>
                </View>
              );
            })
          ) : (
            <Text style={styles.emptyText}>Empty</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  InputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  categoryLocationTitle: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
    fontSize: 13,
    marginLeft: 5,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginLeft: 51,
  },
  emptyText: {
    color: Colors.darkGrey,
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
  },
  tag: {
    marginRight: 8,
    marginBottom: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: Colors.postBorder,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  tagText: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    marginRight: 3,
    letterSpacing: 0.39,
  },
});

export default TagList;
