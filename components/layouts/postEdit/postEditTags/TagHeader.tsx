import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const TagIcon = require("@/assets/images/write/editTags/Tag.png");

const TagHeader: React.FC = () => {
  return (
    <View style={styles.tagContainer}>
      <Image source={TagIcon} style={styles.tagIcon} />
      <Text style={styles.tagText}>Selected tag(s)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tagIcon: {
    marginRight: 8,
  },
  tagText: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Medium",
    lineHeight: 24,
    letterSpacing: 0.16,
  },
});

export default TagHeader;
