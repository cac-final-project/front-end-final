import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Alert,
} from "react-native";
import { Inputs, LoginBtn, SignupLink } from "@/components/layouts/login/index";
import { Header } from "@/components/common/auth/index";
import { Colors } from "@/constants/Colors";
import { loginApi } from "@/api/login";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { tokenAtom, isLoggedInAtom, loginInfoAtom } from "@/state/atoms/login";
import { useSetRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEYS_AND_DEFAULT } from "@/storage/storageKeys";
import { isLoadingAtom } from "@/state/atoms/loading";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const setIsLoading = useSetRecoilState(isLoadingAtom);

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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  const setToken = useSetRecoilState(tokenAtom);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const setloginInfo = useSetRecoilState(loginInfoAtom);
  const handleLoginApi = async () => {
    setIsLoading(true);
    const res = await loginApi({ username, password });
    if (res !== false) {
      const {
        data: { token, username, nickname, type, phone_no },
      } = res;
      await AsyncStorage.setItem(
        KEYS_AND_DEFAULT.username[0],
        JSON.stringify(username)
      );
      await AsyncStorage.setItem(
        KEYS_AND_DEFAULT.password[0],
        JSON.stringify(password)
      );
      setToken(token);
      setIsLoggedIn(true);
      setloginInfo({ username: username, nickname: nickname, type, phone_no });
      Alert.alert(
        "Success", // Title
        "Login is successful.", // Message
        [
          {
            text: "OK",
            onPress: () => {
              setIsLoading(false);
              navigation.navigate("Resource");
            }, // Navigate on "OK" press
          },
        ],
        { cancelable: false } // Alert is not dismissible
      );
    } else {
      Alert.alert("Error", "Login failed. Please try again.");
    }
  };

  const handleLoginInfo = (target: "id" | "pw", value: string) => {
    if (target === "id") {
      setUsername(value);
    } else if (target === "pw") {
      setPassword(value);
    }
  };

  useEffect(() => {
    if (username && password) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [username, password]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Header screenType="Login" />
        <Inputs
          username={username}
          password={password}
          handleLoginInfo={handleLoginInfo}
        />
        <View style={{ flex: keyboardVisible ? 0 : 1 }} />
        <LoginBtn isFilled={isFilled} handleLoginApi={handleLoginApi} />
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
