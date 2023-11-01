import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { pageStatus } from "@/components/screens/signup/SignupScreen";
import { checkDupIdApi } from "@/api/signup";
import { useSetRecoilState } from "recoil";
import { isUsernameNotValidAtom } from "@/state/atoms/signup";

interface NicknameContinueBtnProps {
  handleMoveProgress: () => void;
  nickname?: string;
  pageStatus: pageStatus;
  password?: string;
  username?: string;
}

const NicknameContinueBtn: React.FC<NicknameContinueBtnProps> = ({
  handleMoveProgress,
  nickname,
  pageStatus,
  password,
  username,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const setIsUsernameNotValid = useSetRecoilState(isUsernameNotValidAtom);

  useEffect(() => {
    if (pageStatus === "set your nickname") {
      if (nickname) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    } else if (pageStatus === "set your account") {
      if (username && password) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [pageStatus, nickname, password, username]);

  const styles = getStyles(isActive);

  const handlePressBtn = async () => {
    if (isActive) {
      if (pageStatus === "set your account") {
        const res = await checkDupIdApi({ username: username! });
        // if it does not exist
        if (!res.data) {
          setIsUsernameNotValid(false);
          handleMoveProgress();
        } else {
          setIsUsernameNotValid(true);
        }
      } else {
        handleMoveProgress();
      }
    }
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handlePressBtn}>
        <View style={styles.container}>
          <Text style={styles.text}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

function getStyles(isActive: boolean) {
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
      backgroundColor: isActive ? Colors.primary : Colors.grey,
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
