import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { IAlert } from "@/typings/emergency";
import { getDayOfMonth, getFormattedTime, getMonthName } from "@/utils/index";

interface EmergencyProps {
  emergency: IAlert;
}

const Details: React.FC<EmergencyProps> = ({ emergency }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>When</Text>
        </View>
        <Text style={styles.contentText}>
          {getMonthName(emergency.properties.effective)}{" "}
          {getDayOfMonth(emergency.properties.effective)},{" "}
          {getFormattedTime(emergency.properties.effective)}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Urgency</Text>
        </View>
        <Text style={styles.contentText}>{emergency.properties.urgency}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Severity</Text>
        </View>
        <Text style={styles.contentText}>{emergency.properties.severity}</Text>
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
