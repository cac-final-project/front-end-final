import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import ResourceItem from "./ResourceItem";

const CampaignIcon = require("@/assets/images/resource/resourceItem/CampaignItem.png");
const ToiletIcon = require("@/assets/images/resource/resourceItem/ToiletItem.png");
const WaterIcon = require("@/assets/images/resource/resourceItem/WaterItem.png");

const BottomSlider: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.firstElement}>
          <ResourceItem image_url={WaterIcon} />
        </View>
        <View style={styles.restElement}>
          <ResourceItem image_url={WaterIcon} />
        </View>
        <View style={styles.restElement}>
          <ResourceItem image_url={WaterIcon} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "transparent", // Ensure it's transparent
    bottom: 80,
  },
  firstElement: {
    borderRadius: 8,
    marginLeft: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 4,
  },
  restElement: {
    borderRadius: 8,
    marginLeft: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 4,
  },
  scrollContainer: {},
});

export default BottomSlider;
