import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface LoginBtnProps {
  isFilled: boolean;
}

const LoginBtn: React.FC<LoginBtnProps> = ({ isFilled }) => {
  const styles = getStyles(isFilled);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.text}>Log in</Text>
      </View>
    </View>
  );
};

function getStyles(isFilled: boolean) {
  return StyleSheet.create({
    wrapper: { paddingHorizontal: 24 },
    container: {
      marginTop: 24,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: isFilled ? Colors.primary : Colors.grey,
    },
    text: {
      color: Colors.white,
      fontFamily: "PlusJakartaSans-Bold",
      fontSize: 16,
      letterSpacing: 0.48,
    },
  });
}

export default LoginBtn;
