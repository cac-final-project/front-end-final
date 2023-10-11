import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const WelcomeTitle: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        To join our community, we need your purpose of using this app.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingTop: 32,
    paddingHorizontal: 30,
    paddingBottom: 32,
  },
  text: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.6,
  },
});

export default WelcomeTitle;
