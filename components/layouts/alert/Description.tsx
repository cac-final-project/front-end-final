import React from "react";
import { IAlert } from "@/typings/emergency";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface EmergencyProps {
  emergency: IAlert;
}

const Description: React.FC<EmergencyProps> = ({ emergency }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Descriptions</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          {emergency.properties.description}
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
