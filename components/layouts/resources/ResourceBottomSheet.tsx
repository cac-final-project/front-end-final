import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import ResourceItem from "./ResourceItem";
import { Colors } from "@/constants/Colors";
import { TResource, TAmenities } from "@/typings/resources";

const CampaignIcon = require("@/assets/images/resource/resourceItem/CampaignItem.png");
const ToiletIcon = require("@/assets/images/resource/resourceItem/ToiletItem.png");
const WaterIcon = require("@/assets/images/resource/resourceItem/WaterItem.png");
const BenchIcon = require("@/assets/images/resource/resourceItem/BenchItem.png");
const ShowerIcon = require("@/assets/images/resource/resourceItem/ShowerItem.png");

interface ResourceBottomSheetProps {
  index: number;
  snapPoints: (string | number)[];
  tagChosen: TAmenities;
  resources: TResource[];
}

const ResourceBottomSheet: React.FC<ResourceBottomSheetProps> = ({
  index,
  snapPoints,
  tagChosen,
  resources,
}) => {
  return (
    <BottomSheet style={styles.container} index={index} snapPoints={snapPoints}>
      <Text style={styles.heading}>
        {tagChosen ? `Nearest ${tagChosen}` : "Find useful resources near you!"}
      </Text>
      <BottomSheetScrollView style={styles.results}>
        {resources?.map((item) => {
          return (
            <View style={styles.resourceitem}>
              <ResourceItem key={item.id} item={item} />
            </View>
          );
        })}
        <View style={styles.spacer} />
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  heading: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: "PlusJakartaSans-Bold",
    marginBottom: 16,
  },
  resourceitem: {
    marginBottom: 8,
  },
  results: {
    flex: 1,
  },
  spacer: {
    height: 200,
  },
});

export default ResourceBottomSheet;
