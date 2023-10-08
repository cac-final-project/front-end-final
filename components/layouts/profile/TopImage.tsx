import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";

const image_url =
  "https://res.cloudinary.com/djehfg3yk/image/upload/v1696151625/file-upload/1696151623996-KakaoTalk_20230218_194526049_02_pedm6t.jpg";

const TopImage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image_url }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Chanhwi Yang</Text>
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
});

export default TopImage;
