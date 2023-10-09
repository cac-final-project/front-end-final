import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login in to your account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.white,
    fontSize: 24,
    fontFamily: "PlusJakartaSans-Bold",
  },
});

export default Header;
