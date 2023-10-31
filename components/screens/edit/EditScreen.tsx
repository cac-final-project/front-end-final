import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { TopImage } from "@/components/common/profile/index";
import { Contact, Bio } from "@/components/layouts/edit/index";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tokenAtom, loginInfoAtom } from "@/state/atoms/login";
import { getProfileInfoApi } from "@/api/profile";
import { profileAtom } from "@/state/atoms/profileEdit";

const EditProfile: React.FC = () => {
  const loginInfoValue = useRecoilValue(loginInfoAtom);
  const tokenValue = useRecoilValue(tokenAtom);
  const setProfile = useSetRecoilState(profileAtom);
  const handleProfileApi = async () => {
    const res = await getProfileInfoApi({ token: tokenValue! });
    const {
      data: { bio, profile_img, posts },
    } = res;
    setProfile({ bio, profile_img, posts });
  };
  useEffect(() => {
    handleProfileApi();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopImage />
        <Contact
          nickname={loginInfoValue.nickname}
          phone_no={loginInfoValue.phone_no}
        />
        <Bio />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.white,
  },
});

export default EditProfile;
