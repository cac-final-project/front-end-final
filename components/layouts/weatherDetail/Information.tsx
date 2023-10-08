import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const Information: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Information</Text>
      <Text style={styles.content}>
        Very high temperatures that pose significant health risks. Prolonged
        exposure can lead to heat-related illnesses. It's essential to stay
        indoors, avoid strenuous activities, and drink plenty of water. Heat
        advisories or warnings are often issued during such conditions.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: 30,
    marginBottom: 8,
  },
  content: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.56,
    lineHeight: 21,
  },
});

export default Information;
