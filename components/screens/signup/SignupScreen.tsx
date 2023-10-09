import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const SignupScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>forgotPwScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});

export default SignupScreen;
