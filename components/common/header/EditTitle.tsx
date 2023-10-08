import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const EditTitle: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Edit Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: 24,
    letterSpacing: 0.16,
  },
});

export default EditTitle;
