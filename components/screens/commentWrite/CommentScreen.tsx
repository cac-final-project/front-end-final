import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { ContentInput } from "@/components/layouts/commentWrite";

const CommentScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.inputContainer}>
        <View style={styles.line}></View>
        <ContentInput />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inputContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    marginBottom: 58,
  },
  commentHeaderText: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
    fontSize: 13,
    marginLeft: 5,
    marginBottom: 20,
  },
  line: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: Colors.signupBoxBorder,
    marginBottom: 16,
  },
});

export default CommentScreen;
