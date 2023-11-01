import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Colors } from "@/constants/Colors";
import { MarkerIcon } from "@/components/common/map/index";
import { useRecoilState } from "recoil";
import { postAtom } from "@/state/atoms/post";

const MapDetail: React.FC = () => {
  const [post, setPost] = useRecoilState(postAtom);
  const [isMapReady, setIsMapReady] = useState(false);

  const onLayout = () => {
    setIsMapReady(true);
  };

  const latitudeOffset = 0.001; // Adjust this value as needed for offset

  return (
    <View style={styles.container} onLayout={onLayout}>
      {isMapReady && post && (
        <View style={styles.mapContainer}>
          <MapView
            initialRegion={{
              latitude: (post.lat || 37.78825) + latitudeOffset,
              longitude: post.lon || -122.4324,
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
                latitude: post.lat || 37.78825,
                longitude: post.lon || -122.4324,
              }}
              anchor={{ x: 0.5, y: 0.5 }} // Adjusts the anchor point of the marker
            >
              <MarkerIcon />
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
});

export default MapDetail;
