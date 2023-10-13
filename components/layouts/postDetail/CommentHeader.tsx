import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const CommentHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comments (3)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  text: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 12,
  },
});

export default CommentHeader;
