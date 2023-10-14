import React, { useState } from "react";
import { View, Text } from "react-native";
import { tagsAtom } from "@/state/atoms/write";
import { useRecoilState } from "recoil";

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
    <View>
      <Text>EditTagScreen</Text>
    </View>
  );
};

export default EditTagScreen;
