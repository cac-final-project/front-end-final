import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { WeatherDetailType } from "@/mock/weather";

interface InformationProps {
  detail: WeatherDetailType;
}

const Information: React.FC<InformationProps> = ({ detail }) => {
  if (detail?.description) {
    return (
      <View>
        <Text style={styles.content}>{detail?.description}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  content: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.14,
    lineHeight: 19.6,
  },
});

export default Information;
