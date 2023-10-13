import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const TagList: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tagContainer}>
        <Text>Free</Text>
      </View>
      <View style={styles.tagContainer}>
        <Text>Wheelchair</Text>
      </View>
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
