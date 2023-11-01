import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { MarkerIcon } from "@/components/common/map/index";
import { useRecoilValue } from "recoil";
import { locationAtom } from "@/state/atoms/location";

interface ISelectedPlaceLocation {
  lat: number;
  lon: number;
}

interface MainMapProps {
  mapRef: React.RefObject<MapView>;
  selectedPlaceLocation: ISelectedPlaceLocation | null;
  initialRegion: Region;
}

const MainMap: React.FC<MainMapProps> = ({
  selectedPlaceLocation,
  initialRegion,
  mapRef,
}) => {
  const [region, setRegion] = useState<Region>(initialRegion);
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    setRegion(initialRegion);
    setKey((prev) => prev + 1); // Increment key to force re-render
  }, [initialRegion]);

  useEffect(() => {
    if (selectedPlaceLocation) {
      setRegion({
        ...region,
        latitude: selectedPlaceLocation.lat,
        longitude: selectedPlaceLocation.lon,
      });
    }
  }, [selectedPlaceLocation]);

  return (
    <MapView
      ref={mapRef}
      initialRegion={region}
      region={region}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
    >
      {selectedPlaceLocation && (
        <Marker
          coordinate={{
            latitude: selectedPlaceLocation.lat,
            longitude: selectedPlaceLocation.lon,
          }}
        >
          <MarkerIcon />
        </Marker>
      )}
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
