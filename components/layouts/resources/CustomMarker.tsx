import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TResource } from "@/typings/resources";
import { markerConvert } from "@/utils/index";

// Import your icons
const BlueMarkerIcon = require("@/assets/images/resource/marker/BlueMarker.png");
const YellowMarkerIcon = require("@/assets/images/resource/marker/YellowMarker.png");
const WaterIcon = require("@/assets/images/resource/marker/Water.png");

interface CustomMarkerProps {
  selectedPlace: undefined | number;
  setSelectedPlace: React.Dispatch<React.SetStateAction<undefined | number>>;
  item: TResource;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  selectedPlace,
  setSelectedPlace,
  item,
}) => {
  const { amenity, address, distance, tags, id } = item ?? {};
  return (
    <View style={styles.markerContainer}>
      <Image
        source={selectedPlace === id ? YellowMarkerIcon : BlueMarkerIcon}
        style={styles.markerIcon}
      />
      <Image source={markerConvert(amenity)} style={styles.waterIcon} />
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
