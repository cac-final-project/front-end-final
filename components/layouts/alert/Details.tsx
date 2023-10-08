import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const Details: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>When</Text>
        </View>
        <Text style={styles.contentText}>July 15, 09:35 AM</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Urgency</Text>
        </View>
        <Text style={styles.contentText}>urgency info</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Severity</Text>
        </View>
        <Text style={styles.contentText}>Severity info</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 4,
  },
  titleContainer: {
    width: 86,
    marginRight: 8,
  },
  title: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.56,
  },
  contentText: {
    color: Colors.black,
    fontSize: 10,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.3,
  },
});

export default Details;
