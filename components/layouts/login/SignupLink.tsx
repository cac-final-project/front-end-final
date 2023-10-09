import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

const SignupLink: React.FC = () => {
  const handleSignupClick = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>Don't have an account? </Text>
      <TouchableOpacity onPress={handleSignupClick}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Ensure Text components are side by side
    paddingVertical: 16,
    paddingHorizontal: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  normalText: {
    color: Colors.black,
    fontSize: 12,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.36,
  },
  signUpText: {
    color: Colors.linkColor,
    fontSize: 12,
    textDecorationLine: "underline",
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.36,
  },
});

export default SignupLink;
