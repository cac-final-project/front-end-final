import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const Instruction: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Instructions</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          An Extreme Heat Warning means that a prolonged period of dangerously
          hot temperatures will occur. This will create a dangerous situation in
          which heat illnesses are likely. Drink plenty of fluids, stay in an
          air-conditioned room, stay out of the sun, and check up on relatives
          and neighbors.",
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

export default Instruction;
