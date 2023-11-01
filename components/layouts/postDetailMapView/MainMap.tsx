import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { MarkerIcon } from "@/components/common/map/index";

interface MainMapProps {
  lat: number;
  lon: number;
}

const MainMap: React.FC<MainMapProps> = ({ lat, lon }) => {
  const latitudeOffset = 0.001;

  return (
    <MapView
      initialRegion={{
        latitude: (lat || 37.78825) + latitudeOffset,
        longitude: lon || -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
    >
      <Marker
        coordinate={{
          latitude: lat || 37.78825,
          longitude: lon || -122.4324,
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
