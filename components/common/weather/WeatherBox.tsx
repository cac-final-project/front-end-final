import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const RightIcon = require("@/assets/images/RightArrow.png");

const WeatherBox: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.levelContainer}>
        <Text style={styles.levelText}>Lv 1</Text>
        <Text style={styles.heatLevelText}>Mild Heat</Text>
        <Image source={RightIcon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "#5BA6CD",
    borderWidth: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  levelContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    height: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  levelText: {
    color: "#5BA6CD",
    fontSize: 20,
    letterSpacing: 0.6,
  },
  heatLevelText: {
    color: "#5BA6CD",
    fontSize: 20,
    letterSpacing: 0.6,
  },
});

export default WeatherBox;
