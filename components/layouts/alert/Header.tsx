import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const Header: React.FC = () => {
  return (
    <View>
      <Text style={styles.header}>Event</Text>
      <Text style={styles.title}>Extreme Heat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Medium",
    lineHeight: 32,
    marginBottom: 8,
  },
  title: {
    color: Colors.black,
    fontSize: 35,
    fontFamily: "PlusJakartaSans-ExtraBold",
    lineHeight: 32,
  },
});

export default Header;
