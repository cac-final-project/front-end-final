import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const Happens: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What happens?</Text>
      <Text style={styles.text}>
        Minor discomfort, slight dehydration if not cautious.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
  },
  title: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.64,
    lineHeight: 24,
    marginBottom: 8,
  },
  text: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.14,
    lineHeight: 19.6,
  },
});

export default Happens;
