import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { MarkerIcon } from "@/components/common/map/index";

interface MainMapProps {
  lat: number;
  lon: number;
}

const MainMap: React.FC<MainMapProps> = ({ lat, lon }) => {
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      style={styles.map}
    >
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
      >
        <MarkerIcon />
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
