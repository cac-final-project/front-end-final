import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { smsCodeAtom, isSmsCodeNotValidAtom } from "@/state/atoms/signup";

interface SignupBtnProps {
  confirmNo: string;
  handleSignup: () => Promise<void>;
}

const SignupBtn: React.FC<SignupBtnProps> = ({ confirmNo, handleSignup }) => {
  const smsCode = useRecoilValue(smsCodeAtom);
  console.log(smsCode);
  const setIsSmsCodeNotValid = useSetRecoilState(isSmsCodeNotValidAtom);
  const styles = getStyles(confirmNo);
  const handlePressBtn = async () => {
    const smsCodeString = smsCode?.join("");

    if (confirmNo === smsCodeString) {
      await handleSignup();
    } else {
      setIsSmsCodeNotValid(true);
    }
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handlePressBtn}>
        <View style={styles.container}>
          <Text style={styles.text}>Sign up</Text>
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
