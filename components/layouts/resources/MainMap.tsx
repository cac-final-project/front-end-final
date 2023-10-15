import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import CustomMarker from "./CustomMarker";

interface MainMapProps {
  selectedPlace: undefined | string;
  setSelectedPlace: React.Dispatch<React.SetStateAction<undefined | string>>;
}

const MainMap: React.FC<MainMapProps> = ({
  selectedPlace,
  setSelectedPlace,
}) => {
  const handleSelectPlace = (place: string) => {
    if (place === selectedPlace) {
      setSelectedPlace(undefined);
    } else {
      setSelectedPlace(place);
    }
  };
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
    >
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        onPress={() => handleSelectPlace("streetname")}
        // anchor={{ x: 0.5, y: 0.5 }} // Adjusts the anchor point of the marker
      >
        <CustomMarker
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
          address={"streetname"}
        />
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MainMap;
