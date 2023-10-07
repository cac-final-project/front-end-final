import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";

const MarkerIcon = require("@/assets/images/Marker.png");

const Neighborhood: React.FC = () => {
  const [neighborhood, setNeighborhood] = useState("Downtown");

  return (
    <SafeAreaView style={styles.centerBox}>
      <Image source={MarkerIcon} style={styles.icon} />
      <Text style={styles.text}>{neighborhood}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerBox: {
    backgroundColor: Colors.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row", // display children side by side
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 10, // space between icon and text
    width: 24,
    height: 24,
  },
  text: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Medium",
  },
});

export default Neighborhood;
