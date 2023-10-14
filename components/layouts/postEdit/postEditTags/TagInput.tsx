import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Feather, Foundation } from "@expo/vector-icons";
import { temporaryTagsAtom } from "@/state/atoms/write";
import { Colors } from "@/constants/Colors";

const DeleteIcon = require("@/assets/images/write/editTags/Delete.png");

interface TagInputProps {
  tags: string[];
}

const TagInput: React.FC<TagInputProps> = ({ tags }) => {
  const [currentTagText, setCurrentTagText] = useState("");
  const [temporaryTag, setTemporaryTag] = useRecoilState(temporaryTagsAtom);

  const handleSetTags = () => {
    // Ensure the tag isn't empty, and isn't already in the list
    if (currentTagText && !tags.includes(currentTagText)) {
      setTemporaryTag((prevTags) => [...prevTags, currentTagText]);
    } else {
      alert("tag already exist!");
    }
    setCurrentTagText(""); // Reset the input
  };

  const deleteTag = (tag: string) => {
    setTemporaryTag((prev) => {
      return prev.filter((item) => item !== tag);
    });
  };

  useEffect(() => {
    setTemporaryTag(tags);
  }, []);
  return (
    <View style={styles.inputTagsContainer}>
      {temporaryTag.length !== 0 &&
        temporaryTag.map((item, idx) => {
          return (
            <TouchableOpacity key={item} onPress={() => deleteTag(item)}>
              <View style={styles.tag}>
                <Text key={item} style={styles.tagText}>
                  {item}
                </Text>
                <Image source={DeleteIcon} />
              </View>
            </TouchableOpacity>
          );
        })}
      <TextInput
        value={currentTagText}
        onChangeText={setCurrentTagText}
        onSubmitEditing={handleSetTags}
        returnKeyType="done"
        placeholder="Type a tag and press Enter"
        style={{ flexShrink: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputTagsContainer: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  tag: {
    marginRight: 8,
    marginBottom: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
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
    letterSpacing: 0.39,
    marginRight: 8,
  },
});

export default TagInput;
