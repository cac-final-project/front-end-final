import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const Information: React.FC = () => {
  return (
    <View>
      <Text style={styles.content}>
        The temperature is a bit warmer than usual. It’s okay to be outside, but
        make sure you have some water with you just in case!
      </Text>
    </View>
  );
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
