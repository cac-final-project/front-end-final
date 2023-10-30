import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { IAlert } from "@/typings/emergency";
import { removeNewLines } from "@/utils/index";

interface EmergencyProps {
  emergency: IAlert;
}

const Instruction: React.FC<EmergencyProps> = ({ emergency }) => {
  if (emergency.properties.instruction) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Instructions</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            {removeNewLines(emergency.properties.instruction)}
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 40,
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

export default Instruction;
