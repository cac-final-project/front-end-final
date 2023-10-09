import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";

const ResendLink: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleSignupClick = () => {
    navigation.navigate("Signup");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignupClick}>
        <Text style={styles.resendText}>Resend a verification code.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 60,
  },
  resendText: {
    color: Colors.linkColor,
    fontSize: 12,
    textDecorationLine: "underline",
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.36,
  },
});

export default ResendLink;
