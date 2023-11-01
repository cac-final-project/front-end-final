import React, { useMemo, useState, useEffect, useRef } from "react";
import { View, SafeAreaView, StyleSheet, Keyboard } from "react-native";
import {
  MainMap,
  StickyNav,
  ConfirmLocation,
  SearachLocation,
} from "@/components/layouts/postEdit/postEditLocation/index";
import MapView, { Region } from "react-native-maps";
import { Colors } from "@/constants/Colors";
import BottomSheet from "@gorhom/bottom-sheet";
import { PlacePrediction } from "@/typings/google";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  selectedPlaceAtom,
  selectedPlaceLocationAtom,
} from "@/state/atoms/profileEdit";
import { locationAtom } from "@/state/atoms/location";

const EditLocationScreen: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useRecoilState(selectedPlaceAtom);

  const [selectedPlaceLocation, setSelectedPlaceLocation] = useRecoilState(
    selectedPlaceLocationAtom
  );

  const userLocation = useRecoilValue(locationAtom);

  const mapRef = useRef<MapView>(null); // Specify the type here

  const [mapRegion, setMapRegion] = useState<Region>({
    latitude: userLocation?.lat ?? 37.78825,
    longitude: userLocation?.lon ?? -122.4324,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  const moveToUserLocation = () => {
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: userLocation.lat,
          longitude: userLocation.lon,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
        1000
      ); // 1000 is the duration in milliseconds
    }
  };

  const snapPoints = useMemo(() => ["5%", "90%"], []);

  const [bottomSheetIndex, setBottomSheetIndex] = useState(0);

  const handleSearchIconClick = () => {
    setBottomSheetIndex((prev) => (prev === 1 ? 0 : 1));
  };

  const handleSheetChanges = (index: number) => {
    setBottomSheetIndex(index);

    if (index === 0) {
      Keyboard.dismiss();
    }
  };

  const closeBottomSheet = () => {
    setBottomSheetIndex(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MainMap
        mapRef={mapRef}
        selectedPlaceLocation={selectedPlaceLocation}
        initialRegion={mapRegion}
      />
      <ConfirmLocation
        handleSearchIconClick={handleSearchIconClick}
        selectedPlace={selectedPlace}
        setSelectedPlaceLocation={setSelectedPlaceLocation}
      />
      <StickyNav onLocationPress={moveToUserLocation} />
      <BottomSheet
        index={bottomSheetIndex}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={styles.bottomSheet}
      >
        <SearachLocation
          setSelectedPlace={setSelectedPlace}
          closeBottomSheet={closeBottomSheet}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bottomSheet: {
    zIndex: 2,
  },
});

export default EditLocationScreen;
