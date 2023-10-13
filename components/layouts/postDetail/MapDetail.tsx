import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Colors } from "@/constants/Colors";

const YellowMarkerIcon = require("@/assets/images/YellowMarker.png");
const MarkerCampaignIcon = require("@/assets/images/MarkerCampaign.png");

const MapDetail: React.FC = () => {
  const [isMapReady, setIsMapReady] = useState(false);
  console.log(isMapReady);

  const onLayout = () => {
    setIsMapReady(true);
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      {isMapReady && (
        <View style={styles.mapContainer}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            rotateEnabled={false}
            pitchEnabled={false}
          >
            <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
            >
              <View style={styles.shadowAndMarkerContainer}>
                <View style={styles.shadowContainer} />
                <View style={styles.markerContainer}>
                  <Image
                    source={YellowMarkerIcon}
                    style={styles.yellowMarker}
                  />
                  <Image
                    source={MarkerCampaignIcon}
                    style={styles.markerCampaign}
                  />
                </View>
              </View>
            </Marker>
          </MapView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
  },
  mapContainer: {
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  markerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  yellowMarker: {},
  markerCampaign: {
    position: "absolute",
    top: 7,
  },
  shadowAndMarkerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  shadowContainer: {
    width: 100,
    height: 70,
    backgroundColor: "rgba(122.19, 122.19, 122.19, 0.2)",
    borderRadius: 9999,
    position: "absolute",
    bottom: -50,
    left: -50,
  },
});

export default MapDetail;
