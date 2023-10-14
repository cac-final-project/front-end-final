import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { tagsAtom } from "@/state/atoms/write";
import { useRecoilState } from "recoil";
import {
  TagHeader,
  TagInput,
} from "@/components/layouts/postEdit/postEditTags/index";
import { Colors } from "@/constants/Colors";

const EditTagScreen: React.FC = () => {
  const [tags, setTags] = useRecoilState(tagsAtom);
  const [currentTag, setCurrentTag] = useState("");
  const handleSetTags = () => {
    // Ensure the tag isn't empty, and isn't already in the list
    if (currentTag && !tags.includes(currentTag)) {
      setTags((prevTags) => [...prevTags, currentTag]);
    } else {
      alert("tag already exist!");
    }
    setCurrentTag(""); // Reset the input
  };
  const deleteTag = (tag: string) => {
    setTags((prev) => {
      return prev.filter((item) => item !== tag);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <TagHeader />
      <TagInput tags={tags} />
      <View style={styles.line}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 24,
  },
  line: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: Colors.postBorder,
    marginBottom: 16,
  },
});

export default EditTagScreen;
