import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Colors } from "@/constants/Colors";
import {
  PhoneNumb,
  SendBtn,
  ConfirmBtn,
  ConfirmNumb,
  ResendLink,
  NewPw,
  SaveBtn,
} from "@/components/layouts/forgotPw/index";
import { Header } from "@/components/common/auth/index";

const ForgotPwScreen: React.FC = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const [isSmsSent, setIsSmsSent] = useState(false);

  const [phoneNo, setPhoneNo] = useState<string>("");

  const handleSendSms = () => {
    if (phoneNo) {
      setIsSmsSent(true);
    }
  };

  const [confirmNo, setConfirmNo] = useState<string>("");
  const [isSmsConfirm, setIsSmsConfirm] = useState(false);

  const handleConfirmSms = () => {
    if (confirmNo) {
      setIsSmsConfirm(true);
    }
  };

  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [isPwConfirm, setIsPwConfirm] = useState(false);

  useEffect(() => {
    if (password === confirmPw) {
      setIsPwConfirm(true);
    } else {
      setIsPwConfirm(false);
    }
  }, [password, confirmPw]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Header screenType="ForgotPw" isSmsConfirm={isSmsConfirm} />
        {!isSmsSent ? (
          <PhoneNumb phoneNo={phoneNo} setPhoneNo={setPhoneNo} />
        ) : isSmsConfirm ? (
          <NewPw
            password={password}
            setPassword={setPassword}
            setConfirmPw={setConfirmPw}
            confirmPw={confirmPw}
          />
        ) : (
          <ConfirmNumb
            phoneNo={phoneNo}
            confirmNo={confirmNo}
            setConfirmNo={setConfirmNo}
          />
        )}
        <View style={{ flex: keyboardVisible ? 0 : 1 }} />
        {!isSmsSent ? (
          <SendBtn phoneNo={phoneNo} handleSendSms={handleSendSms} />
        ) : isSmsConfirm ? (
          <SaveBtn isPwConfirm={isPwConfirm} />
        ) : (
          <View>
            <ResendLink />
            <ConfirmBtn
              confirmNo={confirmNo}
              handleConfirmSms={handleConfirmSms}
            />
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});

export default ForgotPwScreen;
