import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

const defaultImageAsset = require("@/assets/images/DefaultProfile.png");

interface TopImageProps {
  profile_img: string | number | undefined;
}

const TopImage: React.FC<TopImageProps> = ({ profile_img }) => {
  const styles = getStyles(profile_img);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={
            typeof profile_img === "string"
              ? { uri: profile_img }
              : profile_img || defaultImageAsset
          }
          style={styles.image}
        />
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
