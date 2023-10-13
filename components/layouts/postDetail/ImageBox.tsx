import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";

const ImageBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/djehfg3yk/image/upload/v1697047297/file-upload/q7fpy7hu8rflrec8qkmp.jpg",
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 164,
    width: 343,
    marginTop: 24,
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
