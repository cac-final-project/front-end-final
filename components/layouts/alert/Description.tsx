import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const Description: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Descriptions</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          The National Weather Service in Los Angeles/Oxnard has issued an
          Extreme Heat Warning, which is in effect from 2 PM this afternoon to 8
          PM PDT Monday. The Excessive Heat Watch is no longer in effect.
          Temperatures of 95 to 105 degrees are expected in many valley
          locations with local temperatures up to 110 degrees possible.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  header: {
    color: Colors.black,
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.45,
  },
  contentContainer: {
    marginTop: 8,
    padding: 8,
    backgroundColor: Colors.lightGrey,
  },
  contentText: {
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
    lineHeight: 20,
  },
});

export default Description;
