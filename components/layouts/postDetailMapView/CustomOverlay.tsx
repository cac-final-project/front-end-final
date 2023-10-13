import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";

const EditIcon = require("@/assets/images/resource/Campaign.png");

interface CustomOverlayProps {
  distance: number;
  streetname: string;
}

const CustomOverlay: React.FC<CustomOverlayProps> = ({
  streetname,
  distance,
}) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.contentContainer}>
        <View style={styles.iconWrapper}>
          <Image source={EditIcon} />
        </View>
        <View style={styles.detailContainer}>
          <View>
            <Text style={styles.streetName}>{streetname}</Text>
            <Text style={styles.distance}>{distance}m</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 30,
    left: 16,
    right: 16,
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  detailContainer: {
    flex: 1,
    marginLeft: 8,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  streetName: {
    color: "#2B2B2B",
    fontSize: 15,
    letterSpacing: 0.45,
  },
  distance: {
    color: "#2B2B2B",
    fontSize: 13,
    letterSpacing: 0.39,
  },
});

export default CustomOverlay;
