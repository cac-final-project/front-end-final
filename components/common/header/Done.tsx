import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNavigationProp, RouteNames } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";
import { editProfileApi } from "@/api/profile";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { editProfileAtom, profileAtom } from "@/state/atoms/profileEdit";
import { tokenAtom } from "@/state/atoms/login";

type RouteType = {
  key: string;
  name: RouteNames;
};

const Done: React.FC = () => {
  const route = useRoute<RouteType>();
  const navigation = useNavigation<ScreenNavigationProp>();

  const setProfile = useSetRecoilState(profileAtom);
  const [editProfileValue, setEditProfile] = useRecoilState(editProfileAtom);
  const tokenValue = useRecoilValue(tokenAtom);

  const handleEditClick = async () => {
    if (route.name === "PostEditTags") {
      navigation.goBack();
    } else {
      const res = await editProfileApi({
        token: tokenValue!,
        file: editProfileValue?.file,
        bio: editProfileValue?.bio,
      });
      if (res !== false) {
        navigation.navigate("Profile");
        setEditProfile({});
        setProfile({
          profile_img: editProfileValue?.file,
          bio: editProfileValue?.bio,
        });
      }
    }
  };

  return (
    <TouchableOpacity onPress={handleEditClick}>
      <SafeAreaView style={styles.rightBox}>
        <Text style={styles.doneText}>Done</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rightBox: {
    backgroundColor: Colors.white,
    alignItems: "center", // icon to center
    marginRight: 16,
  },
  doneText: {
    color: Colors.primary,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Bold",
  },
});

export default Done;
