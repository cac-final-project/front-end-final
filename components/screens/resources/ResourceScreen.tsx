import React, { useMemo, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { Weather, Alert } from "@/components/common/index";
import {
  ResourceBottomSheet,
  TagList,
  OverLay,
  FilterBottomSheet,
  MainMap,
  BottomSlider,
  ViewList,
} from "@/components/layouts/resources/index";
import { TTagChosen } from "@/typings/heatLevels";

const ResourceScreen: React.FC = () => {
  const snapPoints = useMemo(() => ["43%", "80%"], []);
  const [tagChosen, setTagChosen] = useState<TTagChosen>(undefined);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterChosen, setFilterChosen] = useState<string[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<undefined | string>();

  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };
  return (
    <SafeAreaView>
      <Weather />
      <Alert />
      <MainMap
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
      />
      {selectedPlace ? (
        <>
          <ViewList setSelectedPlace={setSelectedPlace} />
          <BottomSlider />
        </>
      ) : (
        <>
          <TagList
            tagChosen={tagChosen}
            setTagChosen={setTagChosen}
            setIsFilterOpen={setIsFilterOpen}
          />
          {isFilterOpen && <OverLay onTap={handleFilterClose} />}
          {!isFilterOpen ? (
            <ResourceBottomSheet
              index={0}
              snapPoints={snapPoints}
              tagChosen={tagChosen}
            />
          ) : (
            <FilterBottomSheet
              handleFilterClose={handleFilterClose}
              filterChosen={filterChosen}
              setFilterChosen={setFilterChosen}
            />
          )}
        </>
      )}
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
