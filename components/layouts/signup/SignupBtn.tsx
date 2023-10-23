import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface SignupBtnProps {
  handleMoveProgress: () => void;
  confirmNo: string;
}

const SignupBtn: React.FC<SignupBtnProps> = ({
  handleMoveProgress,
  confirmNo,
}) => {
  const styles = getStyles(confirmNo);
  const handlePressBtn = () => {
    if (confirmNo.length === 6) {
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

function getStyles(confirmNo: string) {
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
      backgroundColor: confirmNo.length === 6 ? Colors.primary : Colors.grey,
    },
    text: {
      color: Colors.white,
      fontFamily: "PlusJakartaSans-Bold",
      fontSize: 16,
      letterSpacing: 0.48,
    },
  });
}

export default SignupBtn;
