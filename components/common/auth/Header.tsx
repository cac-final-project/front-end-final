import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { RouteNames } from "@/typings/StackParam";

interface HeaderProps {
  screenType: RouteNames;
  isSmsConfirm?: boolean;
}

const Header: React.FC<HeaderProps> = ({ screenType, isSmsConfirm }) => {
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
