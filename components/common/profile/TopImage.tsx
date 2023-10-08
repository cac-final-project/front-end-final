import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { RouteNames } from "@/typings/StackParam";
import * as ImagePicker from "expo-image-picker";

type RouteType = {
  key: string;
  name: RouteNames;
};

const image_url =
  "https://res.cloudinary.com/djehfg3yk/image/upload/v1696151625/file-upload/1696151623996-KakaoTalk_20230218_194526049_02_pedm6t.jpg";

const TopImage: React.FC = () => {
  const route = useRoute<RouteType>();

  const [selectedImages, setSelectedImages] = useState<string>(image_url);
  const handleEditPicture = async () => {
    let result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
    setSelectedImages((result.assets as ImagePicker.ImagePickerAsset[])[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedImages }} style={styles.image} />
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
          <Text style={styles.text}>Chanhwi Yang</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TopImage;
