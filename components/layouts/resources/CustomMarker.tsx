import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

// Import your icons
const BlueMarkerIcon = require("@/assets/images/resource/marker/BlueMarker.png");
const YellowMarkerIcon = require("@/assets/images/resource/marker/YellowMarker.png");
const WaterIcon = require("@/assets/images/resource/marker/Water.png");

interface CustomMarkerProps {
  selectedPlace: undefined | string;
  setSelectedPlace: React.Dispatch<React.SetStateAction<undefined | string>>;
  address: string;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  selectedPlace,
  setSelectedPlace,
  address,
}) => {
  return (
    <View style={styles.markerContainer}>
      <Image
        source={selectedPlace === address ? YellowMarkerIcon : BlueMarkerIcon}
        style={styles.markerIcon}
      />
      <Image source={WaterIcon} style={styles.waterIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    width: 38,
    height: 36,
    position: "relative",
  },
  markerIcon: {
    width: 38,
    height: 36,
    position: "absolute",
    top: 0,
    left: 0,
  },
  waterIcon: {
    position: "absolute",
    top: 7,
    left: 14,
  },
});

export default CustomMarker;
