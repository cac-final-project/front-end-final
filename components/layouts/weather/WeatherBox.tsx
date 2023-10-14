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
  return (
    <TouchableOpacity onPress={handleEditClick} style={styles.container}>
      <View style={styles.levelContainer}>
        <Text style={styles.levelText}>Lv 1</Text>
        <Text style={styles.heatLevelText}>Mild Heat</Text>
        <Image source={RightIcon} />
      </View>
    </TouchableOpacity>
  );
};

function getStyles(level: Level) {
  let borderColor = "";
  switch (level) {
    case 1:
      borderColor = Colors.weather_mild;
      break;
    case 2:
      borderColor = Colors.weather_moderate;
      break;
    case 3:
      borderColor = Colors.weather_intense;
      break;
    default:
      borderColor = Colors.weather_extreme;
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
      color: "#5BA6CD",
      fontSize: 20,
      letterSpacing: 0.6,
      fontFamily: "PlusJakartaSans-SemiBold",
    },
    heatLevelText: {
      color: "#5BA6CD",
      fontSize: 20,
      letterSpacing: 0.6,
      fontFamily: "PlusJakartaSans-Bold",
    },
  });
}

export default WeatherBox;
