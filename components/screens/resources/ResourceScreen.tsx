import React, { useMemo } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { Weather, Alert } from "@/components/common/index";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";

const ResourceScreen: React.FC = () => {
  const snapPoints = useMemo(() => ["25%", "80%"], []);
  return (
    <SafeAreaView>
      <Weather />
      <Alert />
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
      ></MapView>
      <BottomSheet index={1} snapPoints={snapPoints}>
        <Text>Hello!</Text>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default ResourceScreen;
