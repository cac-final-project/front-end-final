import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

const MarkerIcon = require("@/assets/images/write/location/Marker.png");

const LocationItem: React.FC = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={MarkerIcon} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.univeText} numberOfLines={1} ellipsizeMode="tail">
            <Text style={styles.highlightedText}>Unive</Text>rsitatae
          </Text>
          <Text
            style={styles.addressText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Centrul Istoric,Bucuresti
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  univeText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.16,
    fontFamily: "PlusJakartaSans-Medium",
  },
  highlightedText: {
    color: Colors.primary,
  },
  addressText: {
    color: Colors.darkGrey,
    fontSize: 12,
    fontFamily: "PlusJakartaSans-Regular",
  },
});

export default LocationItem;
