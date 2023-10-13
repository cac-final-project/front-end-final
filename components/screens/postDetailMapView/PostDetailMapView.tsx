import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RouteNames } from "@/typings/StackParam";
import {
  MainMap,
  CustomOverlay,
} from "@/components/layouts/postDetailMapView/index";
import { Colors } from "@/constants/Colors";

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    lat: number;
    lon: number;
    streetname: string;
  };
};

const PostDetailMapViewScreen: React.FC = () => {
  const route = useRoute<RouteType>();
  const {
    params: { lat, lon, streetname },
  } = route;
  return (
    <View style={styles.container}>
      <MainMap lat={lat} lon={lon} />
      <CustomOverlay distance={123} streetname={streetname} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default PostDetailMapViewScreen;
