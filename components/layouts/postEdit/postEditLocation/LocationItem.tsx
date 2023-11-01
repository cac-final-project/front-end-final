import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { PlacePrediction } from "@/typings/google";

const MarkerIcon = require("@/assets/images/write/location/Marker.png");

interface LocationItemProps {
  place: PlacePrediction;
  searchword: string;
  setSelectedPlace: React.Dispatch<
    React.SetStateAction<PlacePrediction | null>
  >;
  closeBottomSheet: () => void;
}

const LocationItem: React.FC<LocationItemProps> = ({
  place,
  searchword,
  setSelectedPlace,
  closeBottomSheet,
}) => {
  const { description } = place;

  const highlightSearchWord = (text: string, search?: string) => {
    const searchStr = search || "";

    if (!searchStr.trim()) return <Text>{text}</Text>;

    const regex = new RegExp(`(${searchStr})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <Text key={index} style={styles.highlightedText}>
          {part}
        </Text>
      ) : (
        <Text key={index}>{part}</Text>
      )
    );
  };

  const handleSelect = async (place: PlacePrediction) => {
    setSelectedPlace(place);
    closeBottomSheet();
  };

  return (
    <TouchableOpacity onPress={() => handleSelect(place)}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={MarkerIcon} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.univeText} numberOfLines={1} ellipsizeMode="tail">
            {highlightSearchWord(description, searchword)}
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
