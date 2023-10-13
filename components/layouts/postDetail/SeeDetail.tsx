import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "@/constants/Colors";

const SeeDetail: React.FC = () => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>See detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "100%",
  },
  buttonContainer: {
    backgroundColor: Colors.headerTabGrey,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonText: {
    color: Colors.linkColor,
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Bold",
  },
});

export default SeeDetail;
