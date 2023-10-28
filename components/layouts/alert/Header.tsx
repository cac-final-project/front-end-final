import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { IAlert } from "@/typings/emergency";

interface EmergencyProps {
  emergency: IAlert;
}

const Header: React.FC<EmergencyProps> = ({ emergency }) => {
  return (
    <View>
      <Text style={styles.header}>Event</Text>
      <Text style={styles.title}>{emergency.properties.event}</Text>
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
    lineHeight: 35,
  },
});

export default Header;
