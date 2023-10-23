import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

type UserType = "neighbor" | "volunteer";
type UserTypeState = "" | UserType;

interface ContinueBtnProps {
  handleMoveProgress: () => void;
  userType: UserTypeState;
}

const ContinueBtn: React.FC<ContinueBtnProps> = ({
  handleMoveProgress,
  userType,
}) => {
  const styles = getStyles(userType);
  const handlePressBtn = () => {
    if (userType) {
      handleMoveProgress();
    }
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handlePressBtn}>
        <View style={styles.container}>
          <Text style={styles.text}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

function getStyles(userType: UserTypeState) {
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
      backgroundColor: userType ? Colors.primary : Colors.grey,
    },
    text: {
      color: Colors.white,
      fontFamily: "PlusJakartaSans-Bold",
      fontSize: 16,
      letterSpacing: 0.48,
    },
  });
}

export default ContinueBtn;
