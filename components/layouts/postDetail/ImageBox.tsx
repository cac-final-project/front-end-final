import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { IPostDetail } from "@/typings/post";

interface ImageBoxProps {
  post: IPostDetail;
}

const ImageBox: React.FC<ImageBoxProps> = ({ post }) => {
  const { imageUrls } = post;
  console.log(imageUrls);
  return (
    <View>
      {imageUrls.map((item, idx) => {
        return (
          <View key={idx} style={styles.container}>
            <Image
              source={{
                uri: item,
              }}
              style={styles.image}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 164,
    width: 343,

    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "cover",
  },
});

export default ImageBox;
