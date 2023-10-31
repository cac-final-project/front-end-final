import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { TopImage } from "@/components/common/profile/index";
import { Bio, Activities } from "@/components/layouts/profile/index";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { tokenAtom, loginInfoAtom, isLoggedInAtom } from "@/state/atoms/login";
import { getProfileInfoApi } from "@/api/profile";
import { profileAtom } from "@/state/atoms/profileEdit";
import { isLoadingAtom } from "@/state/atoms/loading";

export interface IProfile {
  bio?: string;
  profile_img?: string | null;
}

const ProfileScreen: React.FC = () => {
  const setIsLoading = useSetRecoilState(isLoadingAtom);

  const navigation = useNavigation<ScreenNavigationProp>();

  const [tokenValue, setTokenValue] = useRecoilState(tokenAtom);
  const [loginInfoValue, setLoginInfoValue] = useRecoilState(loginInfoAtom);
  const [profile, setProfile] = useRecoilState(profileAtom);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);

  const handleProfileApi = async () => {
    setIsLoading(true);
    const res = await getProfileInfoApi({ token: tokenValue! });
    setIsLoading(false);
    const {
      data: { bio, profile_img, posts },
    } = res;
    setProfile({ bio, profile_img, posts });
  };

  const handleLogout = () => {
    setTokenValue(null);
    setLoginInfoValue({ username: "", nickname: "", type: "", phone_no: "" });
    setProfile({ posts: [] });
    setIsLoggedIn(false);
    Alert.alert("Logged Out", "You are successfully logged out.", [
      { text: "OK", onPress: () => navigation.navigate("Resource") },
    ]);
  };

  useEffect(() => {
    handleProfileApi();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <ScrollView style={styles.scrollView}>
          <TopImage nickname={loginInfoValue.nickname} />
          <Bio />
          <Activities />
        </ScrollView>
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flexGrow: 1,
  },
  logoutContainer: {
    padding: 16,
  },
  logoutText: {
    fontSize: 13,
    color: Colors.primary,
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: 18.2,
    letterSpacing: 0.39,
    textDecorationLine: "underline",
  },
});

export default ProfileScreen;
