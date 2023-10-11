import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const PostEditScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>PostEditScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default PostEditScreen;
