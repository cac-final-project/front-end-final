import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";

interface ShouldDoItem {
  img_url: number;
}

const ShouldDoItem: React.FC<ShouldDoItem> = ({ img_url }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={img_url} />
        </View>
      </View>
      <Text style={styles.text}>ShouldDoItem</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.postBorder,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  imageContainer: {
    padding: 8,
    width: 50,
    alignItems: "center",
  },
  text: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.14,
    lineHeight: 19.6,
    marginLeft: 8,
  },
});

export default ShouldDoItem;
