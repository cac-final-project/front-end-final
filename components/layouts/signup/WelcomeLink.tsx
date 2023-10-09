import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

const WelcomeLink: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleSignupClick = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>Already have an account? </Text>
      <TouchableOpacity onPress={handleSignupClick}>
        <Text style={styles.signUpText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 30,
    paddingHorizontal: 30,
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

export default WelcomeLink;
