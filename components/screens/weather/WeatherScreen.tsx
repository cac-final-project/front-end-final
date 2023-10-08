import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Weather } from "@/components/layouts/resources/index";
import { WeatherContent } from "@/components/layouts/weather/index";

const WeatherScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Weather />
      <View style={styles.weatherContainer}>
        <WeatherContent />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: "red",
  },
});

export default WeatherScreen;
