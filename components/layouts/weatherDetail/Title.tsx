import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { level } from "@/typings/heatLevels";

interface TitleProps {
  level: level;
}

const Title: React.FC<TitleProps> = ({ level }) => {
  const styles = getStyles(level);
  return (
    <View>
      <Text style={styles.levelText}>Level {level}</Text>
      <Text style={styles.heatLevelText}>Mild Heat</Text>
    </View>
  );
};

function getStyles(level: level) {
  let color = "";
  switch (level) {
    case 1:
      color = Colors.weather_mild;
      break;
    case 2:
      color = Colors.weather_moderate;
      break;
    case 3:
      color = Colors.weather_intense;
      break;
    default:
      color = Colors.weather_extreme;
      break;
  }
  return StyleSheet.create({
    levelText: {
      color: Colors.black,
      fontSize: 16,
      lineHeight: 30,
      fontFamily: "PlusJakartaSans-Medium",
    },
    heatLevelText: {
      color: color,
      fontSize: 35,
      fontFamily: "PlusJakartaSans-Bold",
      marginTop: 8,
      lineHeight: 40,
    },
  });
}

export default Title;
