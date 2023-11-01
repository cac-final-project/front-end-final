import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { getNeighborHoodApi } from "@/api/geolocation";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  locationAtom,
  neighborhoodAtom,
  countyAtom,
} from "@/state/atoms/location";

const MarkerIcon = require("@/assets/images/Marker.png");

const Neighborhood: React.FC = () => {
  const [neighborhood, setNeighborhood] = useRecoilState(neighborhoodAtom);
  const setCounty = useSetRecoilState(countyAtom);
  const locationValue = useRecoilValue(locationAtom);

  const handleNeighborhoodApi = async () => {
    const res = await getNeighborHoodApi(locationValue!);
    if (res !== false) {
      setNeighborhood(
        res.data.neighbourhood + ", " + res.data.city || "Downtown"
      );
      // setCounty(res.data.county || "Henderson");
      setCounty("Kenedy Island");
    }
  };

  useEffect(() => {
    if (locationValue) {
      handleNeighborhoodApi();
    } else {
      setNeighborhood("Downtown");
      setCounty("Ellis");
    }
  }, [locationValue]);
  return (
    <SafeAreaView style={styles.centerBox}>
      <Image source={MarkerIcon} style={styles.icon} />
      <Text style={styles.text}>{neighborhood}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerBox: {
    backgroundColor: Colors.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row", // display children side by side
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 10, // space between icon and text
    width: 24,
    height: 24,
  },
  text: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Medium",
  },
});

export default Neighborhood;
