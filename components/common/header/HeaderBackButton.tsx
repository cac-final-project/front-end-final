import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  HeaderBackButton as OriginalHeaderBackButton,
  HeaderBackButtonProps,
} from "@react-navigation/elements";
import { RouteNames, ScreenNavigationProp } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSetRecoilState, useRecoilState } from "recoil";
import { editProfileAtom } from "@/state/atoms/profileEdit";
import {
  tagsAtom,
  temporaryTagsAtom,
  tipDataAtom,
  editTitleAtom,
  editContentAtom,
  editselectedImagesAtom,
  editaddressNameAtom,
} from "@/state/atoms/write";
import {
  selectedPlaceAtom,
  selectedPlaceLocationAtom,
} from "@/state/atoms/profileEdit";

const backIconWhite = require("@/assets/images/BackIcon.png");
const backIconBlack = require("@/assets/images/write/BackIcon.png");

interface Props extends HeaderBackButtonProps {
  routename: RouteNames;
}

const HeaderBackButton: React.FC<Props> = ({ routename, ...props }) => {
  const setTipData = useSetRecoilState(tipDataAtom);
  const setTags = useSetRecoilState(tagsAtom);
  const setTemporaryTags = useSetRecoilState(temporaryTagsAtom);
  const setTitle = useSetRecoilState(editTitleAtom);
  const setContent = useSetRecoilState(editContentAtom);
  const setSelectedImages = useSetRecoilState(editselectedImagesAtom);
  const setAddress = useSetRecoilState(editaddressNameAtom);

  const [selectedPlace, setSelectedPlace] = useRecoilState(selectedPlaceAtom);

  const [selectedPlaceLocation, setSelectedPlaceLocation] = useRecoilState(
    selectedPlaceLocationAtom
  );
  const navigation = useNavigation<ScreenNavigationProp>();
  if (routename === "EditProfile" || routename === "PostEdit") {
    const setEditProfile = useSetRecoilState(editProfileAtom);
    const handleCancel = () => {
      if (routename === "EditProfile") {
        setEditProfile({});
        navigation.goBack();
      } else {
        setTitle("");
        setContent("");
        setSelectedImages([]);
        setTags([]);
        setTemporaryTags([]);
        setAddress("");
        setSelectedPlaceLocation(null);
        setSelectedPlace(null);
        setTipData(null);
        navigation.goBack();
      }
    };
    return (
      <SafeAreaView
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 16 }}
      >
        <OriginalHeaderBackButton
          {...props}
          backImage={() => (
            <TouchableOpacity onPress={handleCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  } else if (routename === "Weather" || routename === "Alert") {
    return (
      <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
        <OriginalHeaderBackButton
          {...props}
          backImage={() => <Feather name="x" size={24} color={Colors.white} />}
        />
      </SafeAreaView>
    );
  } else if (
    routename === "PostEditTags" ||
    routename === "PostEditLocation" ||
    routename === "CommentWrite"
  ) {
    const handleGoBack = () => {
      if (routename === "PostEditTags") {
        setTemporaryTags([]);
      }
      navigation.goBack();
    };
    return (
      <SafeAreaView
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 16 }}
      >
        <TouchableOpacity
          onPress={handleGoBack}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Image source={backIconBlack} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
        <OriginalHeaderBackButton
          {...props}
          backImage={() => (
            <Image source={backIconWhite} style={{ width: 24, height: 24 }} />
          )}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  cancelText: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
  },
  weatherText: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Bold",
  },
});

export default HeaderBackButton;
