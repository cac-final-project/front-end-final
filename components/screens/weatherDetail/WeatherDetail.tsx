import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Weather } from "@/components/common/index";
import { Title, Information } from "@/components/layouts/weatherDetail/index";
import { RouteNames } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";
import { Level } from "@/typings/heatLevels";

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    level: Level;
  };
};

const WeatherDetail: React.FC = () => {
  const route = useRoute<RouteType>();
  console.log(route);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Weather />
      <View style={styles.container}>
        <Title level={route.params.level} />
        <Information />
      </View>
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
});

export default WeatherDetail;
