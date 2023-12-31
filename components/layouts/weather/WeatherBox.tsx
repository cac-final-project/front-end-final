import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";
import { Level } from "@/typings/heatLevels";

const RightIcon = require("@/assets/images/RightArrow.png");

interface WeatherBoxProps {
  level: Level;
}

const WeatherBox: React.FC<WeatherBoxProps> = ({ level }) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleEditClick = () => {
    navigation.navigate("WeatherDetail", { level: level });
  };

  const styles = getStyles(level);

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
  return (
    <TouchableOpacity onPress={handleEditClick} style={styles.container}>
      <View style={styles.levelContainer}>
        <Text style={styles.levelText}>Lv {level}</Text>
        <Text style={styles.heatLevelText}>{levelText}</Text>
        <Image source={RightIcon} />
      </View>
    </TouchableOpacity>
  );
};

function getStyles(level: Level) {
  let borderColor = "";
  let textColor = "";
  switch (level) {
    case 1:
      borderColor = Colors.weather_mild;
      textColor = Colors.weather_mild;
      break;
    case 2:
      borderColor = Colors.weather_moderate;
      textColor = Colors.weather_moderate;
      break;
    case 3:
      borderColor = Colors.weather_intense;
      textColor = Colors.weather_intense;
      break;
    default:
      borderColor = Colors.weather_extreme;
      textColor = Colors.weather_extreme;
      break;
  }
  return StyleSheet.create({
    container: {
      marginBottom: 16,
      paddingHorizontal: 16,
      paddingVertical: 40,
      backgroundColor: "white",
      borderRadius: 8,
      borderColor: borderColor,
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
      color: textColor,
      fontSize: 20,
      letterSpacing: 0.6,
      fontFamily: "PlusJakartaSans-SemiBold",
    },
    heatLevelText: {
      color: textColor,
      fontSize: 20,
      letterSpacing: 0.6,
      fontFamily: "PlusJakartaSans-Bold",
    },
  });
}

export default WeatherBox;
