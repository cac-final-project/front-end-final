import React, { useEffect, useRef } from "react";
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
import { getWeatherData } from "@/api/weather";
import { useRecoilValue, useRecoilState } from "recoil";
import { locationAtom } from "@/state/atoms/location";
import { convertFahrenheit, heatLevel } from "@/utils/index";
import { weatherInfoAtom } from "@/state/atoms/weather";

const SunIcon = require("@/assets/images/Sun.png");
const TempIcon = require("@/assets/images/Temp.png");

const Weather: React.FC = () => {
  const locationValue = useRecoilValue(locationAtom);
  const [weatherInfo, setWeatherInfo] = useRecoilState(weatherInfoAtom);
  const handleWeatherApi = async () => {
    if (locationValue) {
      const res = await getWeatherData(locationValue.lat, locationValue.lon);
      // temperature
      const fahrenheit = convertFahrenheit(res.main.temp);
      const level = heatLevel(fahrenheit);
      setWeatherInfo((prev) => {
        return { ...prev, temp: fahrenheit, level: level };
      });
    }
  };
  useEffect(() => {
    handleWeatherApi();
  }, []);

  const navigation = useNavigation<ScreenNavigationProp>();
  const handleWeatherClick = () => {
    navigation.navigate("WeatherDetail", { level: weatherInfo.level });
  };

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: weatherInfo.level * 25,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [weatherInfo.level]);

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
                backgroundColor: getLevelColor(weatherInfo.level),
              },
            ]}
          />
          <Text style={styles.levelText}>Level {weatherInfo.level}</Text>
        </View>
        <View style={styles.tempContainer}>
          <Image source={TempIcon} />
          <Text style={styles.tempText}>{weatherInfo.temp}°F</Text>
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
