import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { RouteNames } from "@/typings/StackParam";
import * as ImagePicker from "expo-image-picker";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { editProfileAtom } from "@/state/atoms/profileEdit";
import { profileAtom } from "@/state/atoms/profileEdit";

type RouteType = {
  key: string;
  name: RouteNames;
};
const defaultImageAsset = require("@/assets/images/DefaultProfile.png");

interface TopImageProps {
  nickname?: string;
}

const TopImage: React.FC<TopImageProps> = ({ nickname }) => {
  const route = useRoute<RouteType>();

  const profileValue = useRecoilValue(profileAtom);

  const [selectedImages, setSelectedImages] = useState<
    number | string | undefined
  >(defaultImageAsset);

  const setEditProfile = useSetRecoilState(editProfileAtom);
  const handleEditPicture = async () => {
    let result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
    setSelectedImages((result.assets as ImagePicker.ImagePickerAsset[])[0].uri);
    setEditProfile((prev) => {
      return {
        ...prev,
        file: (result.assets as ImagePicker.ImagePickerAsset[])[0].uri,
      };
    });
  };

  const styles = getStyles(selectedImages);

  useEffect(() => {
    if (profileValue?.profile_img) {
      setSelectedImages(profileValue.profile_img);
    } else {
      setSelectedImages(defaultImageAsset);
    }
  }, [profileValue]);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={
            typeof selectedImages === "string"
              ? { uri: selectedImages }
              : selectedImages || defaultImageAsset
          }
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        {route.name === "EditProfile" ? (
          <TouchableOpacity
            style={styles.editButtonContainer}
            onPress={handleEditPicture}
          >
            <Text style={styles.editButtonText}>Edit picture</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.text}>{nickname}</Text>
        )}
      </View>
    </View>
  );
};

const getStyles = (selectedImages: number | string | undefined) => {
  const resizeModeValue =
    typeof selectedImages === "string" ? "cover" : "center";
  return StyleSheet.create({
    container: {
      alignItems: "center",
    },
    imageContainer: {
      width: 150,
      height: 150,
      borderRadius: 100,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: resizeModeValue,
      backgroundColor: Colors.grey,
    },
    textContainer: {
      marginTop: 8,
    },
    text: {
      fontSize: 16,
      fontFamily: "PlusJakartaSans-Bold",
    },
    editButtonContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F0F0F0",
      borderRadius: 8,
      paddingVertical: 4,
      paddingHorizontal: 12,
    },
    editButtonText: {
      color: Colors.primary,
      fontSize: 13,
      fontFamily: "PlusJakartaSans-Bold", // Assuming "700" weight is "Bold"
      letterSpacing: 0.39,
    },
  });
};

export default TopImage;
