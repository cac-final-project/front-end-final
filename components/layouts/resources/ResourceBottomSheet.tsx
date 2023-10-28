import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import ResourceItem from "./ResourceItem";
import { Colors } from "@/constants/Colors";
import { TResource, TAmenities } from "@/typings/resources";

interface ResourceBottomSheetProps {
  index: number;
  snapPoints: (string | number)[];
  tagChosen: TAmenities;
  resources: TResource[];
  filterChosen: string[];
  handleSelectPlaceAbsolute: (
    type: "sheet" | "slider",
    id: number,
    lat: number,
    lon: number
  ) => void;
  bottomSheetRef: React.RefObject<BottomSheet>;
}

const ResourceBottomSheet: React.FC<ResourceBottomSheetProps> = ({
  index,
  snapPoints,
  tagChosen,
  resources,
  filterChosen,
  handleSelectPlaceAbsolute,
  bottomSheetRef,
}) => {
  const [filteredResources, setFilteredResources] =
    useState<TResource[]>(resources);

  useEffect(() => {
    let tempFilteredResources = resources;

    if (tagChosen) {
      tempFilteredResources = tempFilteredResources.filter(
        (resource) => resource.amenity === tagChosen
      );
    }

    if (filterChosen.length > 0) {
      tempFilteredResources = tempFilteredResources.filter((resource) =>
        filterChosen.some((filterTag) => resource.tags.includes(filterTag))
      );
    }

    setFilteredResources(tempFilteredResources);
  }, [resources, tagChosen, filterChosen]);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      style={styles.container}
      index={index}
      snapPoints={snapPoints}
    >
      <Text style={styles.heading}>
        {tagChosen ? `Nearest ${tagChosen}` : "Find useful resources near you!"}
      </Text>
      <BottomSheetScrollView style={styles.results}>
        {resources.length !== 0 &&
          filteredResources.map((item, idx) => {
            const { id, lat, lon } = item;
            return (
              <TouchableOpacity
                key={idx}
                style={styles.resourceitem}
                onPress={() => handleSelectPlaceAbsolute("sheet", id, lat, lon)}
              >
                <ResourceItem key={item.id} item={item} />
              </TouchableOpacity>
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
