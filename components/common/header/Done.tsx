import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNavigationProp, RouteNames } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";
import { editProfileApi, getProfileInfoApi } from "@/api/profile";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { editProfileAtom, profileAtom } from "@/state/atoms/profileEdit";
import { tokenAtom } from "@/state/atoms/login";
import { isLoadingAtom } from "@/state/atoms/loading";
import { tagsAtom, temporaryTagsAtom } from "@/state/atoms/write";

type RouteType = {
  key: string;
  name: RouteNames;
};

const Done: React.FC = () => {
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  const route = useRoute<RouteType>();
  const navigation = useNavigation<ScreenNavigationProp>();

  const [editProfileValue, setEditProfile] = useRecoilState(editProfileAtom);
  const tokenValue = useRecoilValue(tokenAtom);

  const setProfile = useSetRecoilState(profileAtom);

  const temporaryTags = useRecoilValue(temporaryTagsAtom);
  const setTags = useSetRecoilState(tagsAtom);

  const handleEditClick = async () => {
    if (route.name === "PostEditTags") {
      navigation.goBack();
      setTags(temporaryTags);
    } else {
      setIsLoading(true);
      const res = await editProfileApi({
        token: tokenValue!,
        file: editProfileValue?.file,
        bio: editProfileValue?.bio,
      });

      if (res !== false) {
        setEditProfile({});
        const res = await getProfileInfoApi({ token: tokenValue! });
        setIsLoading(false);
        console.log(res);
        const {
          data: { bio, profile_img, posts },
        } = res;
        setProfile({ bio, profile_img, posts });
        setIsLoading(false);
        navigation.navigate("Profile");
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
