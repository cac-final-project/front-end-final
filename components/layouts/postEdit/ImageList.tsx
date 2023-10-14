import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const CloseIcon = require("@/assets/images/write/Close.png");

interface ImageList {
  selectedImages: string[];
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImageList: React.FC<ImageList> = ({
  selectedImages,
  setSelectedImages,
}) => {
  return (
    <View style={styles.imageContainer}>
      {selectedImages.length > 0 &&
        selectedImages.map((item) => {
          return (
            <View key={item} style={styles.imageWrapper}>
              <Image source={{ uri: item }} style={styles.imageItem} />
              <TouchableOpacity
                style={styles.closeIcon}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                onPress={() =>
                  setSelectedImages((prev) => {
                    return prev.filter((prevItem) => {
                      return prevItem !== item;
                    });
                  })
                }
              >
                <Image source={CloseIcon} />
              </TouchableOpacity>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 30,
  },
  imageWrapper: {
    margin: 5, // Adjust margin as needed
    position: "relative",
  },
  imageItem: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  closeIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
  },
});

export default ImageList;
