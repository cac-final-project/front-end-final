import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";

const profileIcon = require("@/assets/images/Profile.png");

const Neighborhood: React.FC = () => {
  const [neighborhood, setNeighborhood] = useState("Downtown");

  return (
    <SafeAreaView style={styles.centerBox}>
      <Image source={profileIcon} style={{ width: 24, height: 24 }} />
      <Text style={styles.text}>{neighborhood}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerBox: {
    backgroundColor: "#E7E7E8",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    flexDirection: "row", // display children side by side
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 10, // space between icon and text
  },
  text: {
    color: "black",
    fontSize: 18,
  },
});

export default Neighborhood;
