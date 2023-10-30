import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Header } from "@/components/common/auth/index";
import {
  ProgressBar,
  WelcomeTitle,
  WelcomeBox,
  WelcomeLink,
  NicknameInput,
  NicknameContinueBtn,
  AccountInput,
  PhoneNumb,
  VerifyBtn,
  ConfirmNumb,
  ResendLink,
  SignupBtn,
  ContinueBtn,
} from "@/components/layouts/signup/index";
import { signupApi } from "@/api/signup";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { useSetRecoilState } from "recoil";
import { isLoggedInAtom, tokenAtom, loginInfoAtom } from "@/state/atoms/login";
import { loginApi } from "@/api/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEYS_AND_DEFAULT } from "@/storage/storageKeys";

export type progress = 0 | 1 | 2 | 3;
export type pageStatus =
  | "welcome"
  | "set your nickname"
  | "set your account"
  | "what's your number"
  | "verify your number";
export type UserType = "neighbor" | "volunteer";
const userTypes: UserType[] = ["neighbor", "volunteer"];

type UserTypeState = "" | UserType;

const SignupScreen: React.FC = () => {
  const [progress, setProgress] = useState<progress>(0);
  const [pageStatus, setPageStatus] = useState<pageStatus>("welcome");

  const [userType, setUserType] = useState<UserTypeState>("");

  const handleSetUserType = (userType: UserTypeState) => {
    setUserType(userType);
  };

  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [confirmNo, setConfirmNo] = useState("");

  console.log("userType", userType);
  console.log("nickname", nickname);
  console.log("username", username);
  console.log("password", password);
  console.log("phoneNo", phoneNo);
  console.log("confirmNo", confirmNo);

  const navigation = useNavigation<ScreenNavigationProp>();

  const setToken = useSetRecoilState(tokenAtom);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const setloginInfo = useSetRecoilState(loginInfoAtom);
  const handleSignup = async () => {
    const res = await signupApi({
      type: userType as UserType,
      nickname,
      username,
      password,
      phone_no: phoneNo,
    });
    if (res !== false) {
      const res = await loginApi({ username, password });
      const {
        data: { token, nickname, type, phone_no },
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
      setloginInfo({
        username: username,
        nickname: nickname,
        type,
        phone_no,
      });
      Alert.alert(
        "Success", // Title
        "Account Created!", // Message
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("Resource"), // Navigate on "OK" press
          },
        ],
        { cancelable: false } // Alert is not dismissible
      );
    }
  };

  const handleMoveProgress = () => {
    if (pageStatus === "welcome") {
      setProgress(1);
      setPageStatus("set your nickname");
    } else if (pageStatus === "set your nickname") {
      if (nickname) {
        setProgress(2);
        setPageStatus("set your account");
      }
    } else if (pageStatus === "set your account") {
      if (username && password) {
        setProgress(3);
        setPageStatus("what's your number");
      }
    } else if (pageStatus === "what's your number") {
      if (username && password) {
        setProgress(3);
        setPageStatus("verify your number");
      }
    }
  };

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
  }, [pageStatus]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Header screenType={"Signup"} pageStatus={pageStatus} />
        <ProgressBar progress={progress} />
        <ScrollView>
          {pageStatus === "welcome" && (
            <View>
              <WelcomeTitle />
              {userTypes.map((item) => {
                return (
                  <WelcomeBox
                    key={item}
                    title={item}
                    userType={userType}
                    handleMoveProgress={handleMoveProgress}
                    handleSetUserType={handleSetUserType}
                  />
                );
              })}
              <WelcomeLink />
            </View>
          )}
          {pageStatus === "set your nickname" && (
            <View>
              <NicknameInput nickname={nickname} setNickname={setNickname} />
            </View>
          )}
          {pageStatus === "set your account" && (
            <View>
              <AccountInput
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
              />
            </View>
          )}
          {pageStatus === "what's your number" && (
            <View>
              <PhoneNumb
                phoneNo={phoneNo}
                setPhoneNo={setPhoneNo}
                handleMoveProgress={handleMoveProgress}
              />
            </View>
          )}
          {pageStatus === "verify your number" && (
            <View>
              <ConfirmNumb
                phoneNo={phoneNo}
                confirmNo={confirmNo}
                setConfirmNo={setConfirmNo}
              />
            </View>
          )}
          <View style={{ flex: keyboardVisible ? 0 : 1 }} />
          {pageStatus === "welcome" && (
            <ContinueBtn
              userType={userType}
              handleMoveProgress={handleMoveProgress}
            />
          )}
          {pageStatus === "set your nickname" && (
            <NicknameContinueBtn
              pageStatus={pageStatus}
              nickname={nickname}
              handleMoveProgress={handleMoveProgress}
            />
          )}
          {pageStatus === "set your account" && (
            <NicknameContinueBtn
              pageStatus={pageStatus}
              username={username}
              password={password}
              handleMoveProgress={handleMoveProgress}
            />
          )}
          {pageStatus === "what's your number" && (
            <VerifyBtn
              phoneNo={phoneNo}
              handleMoveProgress={handleMoveProgress}
            />
          )}
          {pageStatus === "verify your number" && (
            <View>
              <ResendLink phoneNo={phoneNo} />
              <SignupBtn confirmNo={confirmNo} handleSignup={handleSignup} />
            </View>
          )}
        </ScrollView>
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

export default SignupScreen;
