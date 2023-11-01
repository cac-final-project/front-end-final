import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { PlacePrediction } from "@/typings/google";
import { getPlaceDetails } from "@/api/google";

const SearchIcon = require("@/assets/images/write/location/Search.png");

interface ISelectedPlaceLocation {
  lat: number;
  lon: number;
}

interface ConfirmLocationProps {
  handleSearchIconClick: () => void;
  selectedPlace: PlacePrediction | null;
  setSelectedPlaceLocation: React.Dispatch<
    React.SetStateAction<ISelectedPlaceLocation | null>
  >;
}

const ConfirmLocation: React.FC<ConfirmLocationProps> = ({
  handleSearchIconClick,
  selectedPlace,
  setSelectedPlaceLocation,
}) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleConfirmAddress = () => {
    navigation.goBack();
  };

  const handlePlaceDetailApi = async () => {
    if (selectedPlace) {
      const res = await getPlaceDetails(selectedPlace.place_id);
      setSelectedPlaceLocation({
        lat: res.result.geometry.location.lat,
        lon: res.result.geometry.location.lng,
      });
    }
  };

  useEffect(() => {
    handlePlaceDetailApi();
  }, [selectedPlace]);
  return (
    <View style={styles.container}>
      <View style={styles.locationInfoContainer}>
        <TouchableOpacity onPress={handleSearchIconClick}>
          <Image source={SearchIcon} style={styles.imageContainer} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.locationText}>
            {selectedPlace
              ? selectedPlace.structured_formatting.main_text
              : "[Current location address]"}
          </Text>
          <Text style={styles.detailText}>
            {selectedPlace
              ? selectedPlace.structured_formatting.secondary_text
              : "[Detailed address]"}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleConfirmAddress}
        style={styles.confirmButton}
      >
        <Text style={styles.confirmButtonText}>Confirm Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 15,
    width: "100%",
    height: 150,
    paddingBottom: 16,
    paddingTop: 16,
    paddingHorizontal: 24,
    backgroundColor: "white",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  locationInfoContainer: {
    flexDirection: "row",
    gap: 16,
  },
  imageContainer: {
    marginTop: 5,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 8,
  },
  locationText: {
    color: Colors.black,
    fontSize: 20,
    letterSpacing: 0.6,
    fontFamily: "PlusJakartaSans-Bold",
  },
  detailText: {
    color: Colors.darkGrey,
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.45,
  },
  confirmButton: {
    height: 52,
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  confirmButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.48,
  },
});

export default ConfirmLocation;
