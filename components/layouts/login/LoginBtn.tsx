import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

interface LoginBtnProps {
  isFilled: boolean;
  handleLoginApi: () => Promise<void>;
}

const LoginBtn: React.FC<LoginBtnProps> = ({ isFilled, handleLoginApi }) => {
  const styles = getStyles(isFilled);

  const handlePressBtn = async () => {
    if (isFilled) {
      await handleLoginApi();
    }
  };

  return (
    <TouchableOpacity onPress={handlePressBtn} style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.text}>Log in</Text>
      </View>
    </TouchableOpacity>
  );
};

function getStyles(isFilled: boolean) {
  return StyleSheet.create({
    wrapper: { paddingHorizontal: 24 },
    container: {
      marginTop: 24,
      padding: 16,
      borderRadius: 8,
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
