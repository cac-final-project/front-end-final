import React, { useMemo, useState, useEffect } from "react";
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
import { findResourcesApi } from "@/api/findResources";
import { TResource, TAmenities } from "@/typings/resources";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { locationAtom } from "@/state/atoms/location";
import { resourcesIsLoadedAtom } from "@/state/atoms/loading";

const ResourceScreen: React.FC = () => {
  const snapPoints = useMemo(() => ["30%", "43%", "80%"], []);
  const [tagChosen, setTagChosen] = useState<TAmenities>(undefined);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterChosen, setFilterChosen] = useState<string[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<undefined | string>();

  const setIsLoaded = useSetRecoilState(resourcesIsLoadedAtom);
  const locationValue = useRecoilValue(locationAtom);
  const [resources, setResources] = useState<TResource[]>([]);
  const [amenities, setAmenities] = useState<TAmenities[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  // console.log("resources",resources);
  console.log("resources", resources);
  // console.log(tags);

  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };

  const handleFetchResourcesApi = async () => {
    setIsLoaded(false);
    const res = await findResourcesApi(locationValue);
    if (res !== false) {
      setIsLoaded(true);
      const amenitiesData = res.data.amenities;
      const tagsData = res.data.tags;
      const resourcesData = res.data.data;
      setAmenities(amenitiesData);
      setTags(tagsData);
      setResources(resourcesData);
    }
  };
  useEffect(() => {
    handleFetchResourcesApi();
  }, [locationValue]);
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
            tags={amenities}
          />
          {isFilterOpen && <OverLay onTap={handleFilterClose} />}
          {!isFilterOpen ? (
            <ResourceBottomSheet
              index={1}
              snapPoints={snapPoints}
              tagChosen={tagChosen}
              resources={resources}
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
