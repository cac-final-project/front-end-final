import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { sendSmsApi } from "@/api/signup";
import { useSetRecoilState } from "recoil";
import { smsCodeAtom } from "@/state/atoms/signup";

interface VerifyBtnProps {
  handleMoveProgress: () => void;
  phoneNo: string;
}

const VerifyBtn: React.FC<VerifyBtnProps> = ({
  handleMoveProgress,
  phoneNo,
}) => {
  const setSmsCode = useSetRecoilState(smsCodeAtom);
  const styles = getStyles(phoneNo);
  const handlePressBtn = async () => {
    if (phoneNo) {
      const res = await sendSmsApi({ phone_no: phoneNo });
      console.log(res);
      setSmsCode(res.data);
      handleMoveProgress();
    }
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handlePressBtn}>
        <View style={styles.container}>
          <Text style={styles.text}>Verify your number</Text>
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
