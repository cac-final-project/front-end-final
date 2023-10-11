import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface NicknameContinueBtnProps {
  handleMoveProgress: () => void;
}

const NicknameContinueBtn: React.FC<NicknameContinueBtnProps> = ({
  handleMoveProgress,
}) => {
  const styles = getStyles(true);
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handleMoveProgress}>
        <View style={styles.container}>
          <Text style={styles.text}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

function getStyles(isPwConfirm: boolean) {
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
      backgroundColor: isPwConfirm ? Colors.primary : Colors.grey,
    },
    text: {
      color: Colors.white,
      fontFamily: "PlusJakartaSans-Bold",
      fontSize: 16,
      letterSpacing: 0.48,
    },
  });
}

export default NicknameContinueBtn;
