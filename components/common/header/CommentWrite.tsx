import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const CommentWrite: React.FC = () => {
  return (
    <SafeAreaView>
      <Text style={styles.contentText}>CommentWrite</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentText: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: 24,
    letterSpacing: 0.48,
  },
});

export default CommentWrite;
