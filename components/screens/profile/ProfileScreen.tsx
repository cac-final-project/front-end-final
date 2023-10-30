import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { TopImage } from "@/components/common/profile/index";
import { Bio, Activities } from "@/components/layouts/profile/index";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tokenAtom, loginInfoAtom } from "@/state/atoms/login";
import { getProfileInfoApi } from "@/api/profile";
import { profileAtom } from "@/state/atoms/profileEdit";
import { isLoadingAtom } from "@/state/atoms/loading";

export interface IProfile {
  bio?: string;
  profile_img?: string | null;
}

const ProfileScreen: React.FC = () => {
  const setIsLoading = useSetRecoilState(isLoadingAtom);

  const loginInfoValue = useRecoilValue(loginInfoAtom);
  const tokenValue = useRecoilValue(tokenAtom);
  const setProfile = useSetRecoilState(profileAtom);

  const handleProfileApi = async () => {
    setIsLoading(true);
    const res = await getProfileInfoApi({ token: tokenValue! });
    setIsLoading(false);
    const {
      data: { bio, profile_img },
    } = res;
    setProfile({ bio, profile_img });
  };
  useEffect(() => {
    handleProfileApi();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopImage nickname={loginInfoValue.nickname} />
        <Bio />
        <Activities />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
  },
});

export default ProfileScreen;
