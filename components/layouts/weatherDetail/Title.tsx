import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Level } from "@/typings/heatLevels";

interface TitleProps {
  level: Level;
}

const Title: React.FC<TitleProps> = ({ level }) => {
  let levelText = "";
  switch (level) {
    case 1:
      levelText = "Mild Heat";
      break;
    case 2:
      levelText = "Moderate Heat";
      break;
    case 3:
      levelText = "Intense Heat";
      break;
    default:
      levelText = "Extreme Heat";
      break;
  }

  const styles = getStyles(level);
  return (
    <View style={styles.container}>
      <View style={styles.levelTextContainer}>
        <Text style={styles.levelText}>Level {level}</Text>
      </View>
      <Text style={styles.heatLevelText}>{levelText}</Text>
    </View>
  );
};

function getStyles(level: Level) {
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
    container: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 40,
    },
    levelTextContainer: {
      paddingHorizontal: 16,
      paddingVertical: 4,
      backgroundColor: Colors.darkGrey,
      borderRadius: 8,
    },
    levelText: {
      color: Colors.white,
      fontSize: 10,
      lineHeight: 10,
      letterSpacing: 0.3,
      fontFamily: "PlusJakartaSans-Bold",
    },
    heatLevelText: {
      color: color,
      fontSize: 35,
      fontFamily: "PlusJakartaSans-Bold",
      marginTop: 16,
      lineHeight: 40,
    },
  });
}

export default Title;
