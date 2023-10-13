import React from "react";
import { View, StyleSheet, Image } from "react-native";

// Campaign
const CampaignIcon = require("@/assets/images/maker/CampaignMarker.png");

const MarkerIcon: React.FC = () => {
  console.log("hi");
  return (
    <View style={styles.markerContainer}>
      <View style={styles.shadowContainer}>
        <Image source={CampaignIcon} style={styles.markerImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  shadowContainer: {
    elevation: 4, // Android shadow
    shadowColor: "rgba(0, 0, 0, 0.30)", // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  markerImage: {
    bottom: -4,
  },
});

export default MarkerIcon;
