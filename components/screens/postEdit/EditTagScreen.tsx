import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { tagsAtom } from "@/state/atoms/write";
import { useRecoilState } from "recoil";
import {
  TagHeader,
  TagInput,
  TagList,
} from "@/components/layouts/postEdit/postEditTags/index";
import { Colors } from "@/constants/Colors";

const EditTagScreen: React.FC = () => {
  const [tags, setTags] = useRecoilState(tagsAtom);

  return (
    <SafeAreaView style={styles.container}>
      <TagHeader />
      <TagInput tags={tags} />
      <View style={styles.line}></View>
      <Text style={styles.selectText}>Select an option or create one</Text>
      <TagList />
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
  selectText: {
    color: Colors.darkGrey,
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
  },
});

export default EditTagScreen;
