import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Weather } from "@/components/common/index";
import {
  Title,
  Information,
  Happens,
  ShouldDoItem,
} from "@/components/layouts/weatherDetail/index";
import { RouteNames } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";
import { Level } from "@/typings/heatLevels";
import { weatherData, WeatherDetailType } from "@/mock/weather";

const WaterIcon = require("@/assets/images/weather/Water.png");
const ClothesIcon = require("@/assets/images/weather/Clothes.png");
const ShelterIcon = require("@/assets/images/weather/Shelter.png");

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    level: Level;
  };
};

const WeatherDetail: React.FC = () => {
  const route = useRoute<RouteType>();
  const {
    params: { level },
  } = route;
  console.log(level);

  const [detail, setDetail] = useState<WeatherDetailType | null>();

  useEffect(() => {
    const selectedDetail = weatherData[level];
    setDetail(selectedDetail);
  }, [level]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Weather />
      <ScrollView>
        <View style={styles.container}>
          <Title level={route.params.level} />
          <Information detail={detail!} />
          <View style={styles.line} />
          <Happens detail={detail!} />
          <View style={styles.line} />
          <View style={styles.shouldDoContainer}>
            <Text style={styles.shouldDoText}>What you should do is to...</Text>
            <ShouldDoItem
              img_url={WaterIcon}
              detail={detail!}
              detailType="water"
            />
            <ShouldDoItem
              img_url={ClothesIcon}
              detail={detail!}
              detailType="clothes"
            />
            <ShouldDoItem
              img_url={ShelterIcon}
              detail={detail!}
              detailType="shelter"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  line: {
    borderWidth: 1,
    borderColor: Colors.signupBoxBorder,
    marginVertical: 24,
  },
  shouldDoContainer: {},
  shouldDoText: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.64,
    lineHeight: 24,
    marginBottom: 8,
  },
});

export default WeatherDetail;
