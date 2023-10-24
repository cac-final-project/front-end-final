import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "@/state/atoms/login";

const ProfileIcon = require("@/assets/images/Profile.png");

const Profile: React.FC = () => {
  const isLoggedInValue = useRecoilValue(isLoggedInAtom);
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleProfileClick = () => {
    if (isLoggedInValue) {
      navigation.navigate("Profile");
    } else {
      navigation.navigate("Login");
    }
  };
  return (
    <TouchableOpacity onPress={handleProfileClick}>
      <SafeAreaView style={styles.rightBox}>
        <Image source={ProfileIcon} />
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rightBox: {
    marginRight: 16,
  },
});

export default Profile;
