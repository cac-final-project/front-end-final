import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";

const LocationArrowIcon = require("@/assets/images/LocationArrow.png");

interface StickyNavProps {}

const StickyNav: React.FC<StickyNavProps> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={LocationArrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 185,
    right: 15,
    backgroundColor: "transparent",
  },
});

export default StickyNav;
