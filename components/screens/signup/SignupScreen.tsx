import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Header } from "@/components/common/auth/index";
import {
  ProgressBar,
  WelcomeTitle,
  WelcomeBox,
  WelcomeLink,
} from "@/components/layouts/signup/index";

export type progress = 0 | 1 | 2;
export type pageStatus =
  | "welcome"
  | "set your nickname"
  | "set your account"
  | "what's your number"
  | "verify your number";
type UserType = "user" | "volunteer";
const userTypes: UserType[] = ["user", "volunteer"];

const SignupScreen: React.FC = () => {
  const [progress, setProgress] = useState<progress>(0);
  const [pageStatus, setPageStatus] = useState<pageStatus>("welcome");

  const handleMoveProgress = () => {
    if (progress === 0) {
      setProgress(1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header screenType={"Signup"} />
      <ProgressBar progress={progress} />
      {pageStatus === "welcome" && (
        <View>
          <WelcomeTitle />
          {userTypes.map((item) => {
            return (
              <WelcomeBox
                key={item}
                userType={item}
                handleMoveProgress={handleMoveProgress}
              />
            );
          })}
          <WelcomeLink />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});

export default SignupScreen;
