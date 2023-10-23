import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface VerifyBtnProps {
  handleMoveProgress: () => void;
  phoneNo: string;
}

const VerifyBtn: React.FC<VerifyBtnProps> = ({
  handleMoveProgress,
  phoneNo,
}) => {
  const styles = getStyles(phoneNo);
  const handlePressBtn = () => {
    if (phoneNo) {
      handleMoveProgress();
    }
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handlePressBtn}>
        <View style={styles.container}>
          <Text style={styles.text}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

function getStyles(phoneNo: string) {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: 24,
      paddingBottom: 24,
      paddingTop: 0,
    },
    container: {
      padding: 16,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: phoneNo ? Colors.primary : Colors.grey,
    },
    text: {
      color: Colors.white,
      fontFamily: "PlusJakartaSans-Bold",
      fontSize: 16,
      letterSpacing: 0.48,
    },
  });
}

export default VerifyBtn;
