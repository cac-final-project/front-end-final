import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { WeatherBox } from "@/components/common/weather";

const WeatherContent: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Find out instructions for each levels
          </Text>
        </View>
        {[1, 2, 3, 4].map((item) => {
          return <WeatherBox key={item} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 10, // You can adjust this padding if needed
  },
  title: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.64,
    flexWrap: "wrap",
    flexShrink: 1,
    maxWidth: "90%", // Adjust this based on your design preference
  },
});

export default WeatherContent;
