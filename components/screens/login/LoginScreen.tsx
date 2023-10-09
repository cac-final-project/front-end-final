import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { Inputs, LoginBtn, SignupLink } from "@/components/layouts/login/index";
import { Header } from "@/components/common/auth/index";
import { Colors } from "@/constants/Colors";

const LoginScreen: React.FC = () => {
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

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  const handleLoginInfo = (target: "id" | "pw", value: string) => {
    if (target === "id") {
      setUserId(value);
    } else if (target === "pw") {
      setPassword(value);
    }
  };

  useEffect(() => {
    if (userId && password) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [userId, password]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Header screenType="Login" />
        <Inputs
          userId={userId}
          password={password}
          handleLoginInfo={handleLoginInfo}
        />
        <View style={{ flex: keyboardVisible ? 0 : 1 }} />
        <LoginBtn isFilled={isFilled} />
        <SignupLink />
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

export default LoginScreen;
