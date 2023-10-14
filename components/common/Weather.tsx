import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";

type TLevelBar = 1 | 2 | 3 | 4;

const SunIcon = require("@/assets/images/Sun.png");
const TempIcon = require("@/assets/images/Temp.png");

const Weather: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleWeatherClick = () => {
    navigation.navigate("Weather");
  };

  const [currentLevel, setCurrentLevel] = useState<TLevelBar>(3); // Example level value
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: currentLevel * 25,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [currentLevel]);

  const widthInterpolation = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "#F1A83A";
      case 2:
        return "#F1A83A";
      case 3:
        return "#F1A83A";
      case 4:
        return "#F1A83A";
      default:
        return "#F1A83A";
    }
  };

  return (
    <TouchableOpacity onPress={handleWeatherClick}>
      <View style={styles.container}>
        <Image source={SunIcon} />
        <View style={styles.levelBarContainer}>
          <View style={styles.levelBarBackground} />
          <Animated.View
            style={[
              styles.filledLevel,
              {
                width: widthInterpolation,
                backgroundColor: getLevelColor(currentLevel),
              },
            ]}
          />
          <Text style={styles.levelText}>Level {currentLevel}</Text>
        </View>
        <View style={styles.tempContainer}>
          <Image source={TempIcon} />
          <Text style={styles.tempText}>40°C</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Colors.signupBoxBorder,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  levelBarContainer: {
    width: 236.5,
    height: 27.25,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  levelBarBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  filledLevel: {
    height: 27.25,
    position: "absolute",
    left: 0,
    top: 0,
  },
  levelText: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: 1.2,
    color: Colors.black,
    position: "absolute",
    left: 13,
    top: 4.04,
  },
  tempContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tempText: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    marginLeft: 4,
  },
});

export default Weather;
