import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { tagsMock } from "@/mock/writeTags";
import { Colors } from "@/constants/Colors";
import { useRecoilState } from "recoil";
import { temporaryTagsAtom } from "@/state/atoms/write";
import { fetchTags } from "@/api/tags";

const TagList: React.FC = () => {
  const [temporaryTag, setTemporaryTag] = useRecoilState(temporaryTagsAtom);
  const handleTagClick = (tag: string) => {
    setTemporaryTag((prev) => {
      if (!prev.includes(tag)) {
        return [...prev, tag];
      } else {
        alert("tag already exist!");
      }
      return prev;
    });
  };
  const [tagList, setTagList] = useState<string[]>([]);

  const handleFetchTagsApi = async () => {
    const res = await fetchTags();
    setTagList(res.data);
  };
  useEffect(() => {
    handleFetchTagsApi();
  }, []);
  return (
    <View style={styles.inputTagsContainer}>
      {tagList.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleTagClick(item)}>
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  inputTagsContainer: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 4,
  },
  tag: {
    marginRight: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Colors.postBorder,
    borderRadius: 8,

    justifyContent: "center",
  },
  tagText: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
  },
});

export default TagList;
