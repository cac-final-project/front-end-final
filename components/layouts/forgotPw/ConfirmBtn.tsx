import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";

interface ConfirmBtnProps {
  confirmNo: string;
  handleConfirmSms: () => void;
}

const ConfirmBtn: React.FC<ConfirmBtnProps> = ({
  confirmNo,
  handleConfirmSms,
}) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const styles = getStyles(confirmNo);
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handleConfirmSms}>
        <View style={styles.container}>
          <Text style={styles.text}>{!confirmNo ? "Send" : "Confirm"}</Text>
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
      marginTop: 7,
    },
    container: {
      padding: 16,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: confirmNo ? Colors.primary : Colors.grey,
    },
    text: {
      color: Colors.white,
      fontFamily: "PlusJakartaSans-Bold",
      fontSize: 16,
      letterSpacing: 0.48,
    },
  });
}

export default ConfirmBtn;
