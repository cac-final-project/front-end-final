import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { RouteNames } from "@/typings/StackParam";
import { pageStatus } from "@/components/screens/signup/SignupScreen";

interface HeaderProps {
  screenType: RouteNames;
  isSmsConfirm?: boolean;
  pageStatus?: pageStatus;
}

const Header: React.FC<HeaderProps> = ({
  screenType,
  isSmsConfirm,
  pageStatus,
}) => {
  if (screenType === "Login") {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login in to your account</Text>
      </View>
    );
  } else if (screenType === "ForgotPw") {
    if (isSmsConfirm) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Reset Password</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Forgot password?</Text>
        </View>
      );
    }
  } else if (screenType === "Signup") {
    if (pageStatus === "set your nickname") {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Set your nickname</Text>
        </View>
      );
    } else if (pageStatus === "set your account") {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Set your account</Text>
        </View>
      );
    } else if (pageStatus === "what's your number") {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>What's your number?</Text>
        </View>
      );
    } else if (pageStatus === "verify your number") {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Verify your number</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Welcome!</Text>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.white,
    fontSize: 24,
    fontFamily: "PlusJakartaSans-Bold",
  },
});

export default Header;
