import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

interface SendBtnProps {
  handleSendSms: () => void;
  phoneNo: string;
}

const SendBtn: React.FC<SendBtnProps> = ({ handleSendSms, phoneNo }) => {
  const styles = getStyles(phoneNo);
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handleSendSms}>
        <View style={styles.container}>
          <Text style={styles.text}>Send</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

function getStyles(phoneNo: string) {
  return StyleSheet.create({
    wrapper: { paddingHorizontal: 24, paddingBottom: 24 },
    container: {
      marginTop: 24,
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

export default SendBtn;
