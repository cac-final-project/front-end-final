import React, { useMemo, useState, useEffect, useRef } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Weather, Alert } from "@/components/common/index";
import BottomSheet from "@gorhom/bottom-sheet";
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
  const bottomSheetRef = useRef<BottomSheet>(null);

  const closeSheet = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.snapToIndex(0); // Assuming index 0 corresponds to the closed state
    }
  };

  const [tagChosen, setTagChosen] = useState<TAmenities>(undefined);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterChosen, setFilterChosen] = useState<string[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<undefined | number>();

  const setIsLoaded = useSetRecoilState(resourcesIsLoadedAtom);
  const locationValue = useRecoilValue(locationAtom);
  const [resources, setResources] = useState<TResource[]>([]);
  const [amenities, setAmenities] = useState<TAmenities[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };

  const handleFetchResourcesApi = async () => {
    setIsLoaded(false);
    const res = await findResourcesApi(locationValue);
    if (res !== false) {
      setIsLoaded(true);
      const amenitiesData = res?.data?.amenities;
      const tagsData = res?.data?.tags;
      const resourcesData = res?.data?.data;
      setAmenities(amenitiesData);
      setTags(tagsData);
      setResources(resourcesData);
    } else {
      setAmenities([]);
      setTags([]);
      setResources([]);
    }
  };
  useEffect(() => {
    handleFetchResourcesApi();
  }, [locationValue]);

  // map related
  const mapRef = useRef<MapView>(null);
  const [filteredResources, setFilteredResources] =
    useState<TResource[]>(resources);
  // Calculate initialRegion directly
  const maxDistance = Math.max(
    ...filteredResources.map((resource) => resource.distance || 0)
  );
  const defaultDelta = 0.05;
  const latitudeDelta = maxDistance > 0 ? maxDistance * 0.00003 : defaultDelta;
  const longitudeDelta = maxDistance > 0 ? maxDistance * 0.00003 : defaultDelta;

  const initialRegion = {
    latitude: locationValue.lat,
    longitude: locationValue.lon,
    latitudeDelta,
    longitudeDelta,
  };

  const handleResetSelectPlace = () => {
    setSelectedPlace(undefined);
    mapRef.current?.animateToRegion(initialRegion, 1000);
  };

  const handleSelectPlaceAbsolute = (
    type: "sheet" | "slider",
    id: number,
    lat: number,
    lon: number
  ) => {
    if (type === "sheet") {
      closeSheet();
    } else {
    }
    setSelectedPlace(id);
    const centerOffset = latitudeDelta * 0.003;
    mapRef.current?.animateToRegion(
      {
        latitude: lat + centerOffset,
        longitude: lon,
        latitudeDelta: 0.01, // Adjust as needed
        longitudeDelta: 0.01, // Adjust as needed
      },
      1000
    ); // 1000 milliseconds for animation duratio
  };

  const handleSelectPlace = (id: number, lat: number, lon: number) => {
    if (id === selectedPlace) {
      setSelectedPlace(undefined);
      mapRef.current?.animateToRegion(initialRegion, 1000);
    } else {
      setSelectedPlace(id);
      const centerOffset = latitudeDelta * 0.003;
      mapRef.current?.animateToRegion(
        {
          latitude: lat + centerOffset,
          longitude: lon,
          latitudeDelta: 0.01, // Adjust as needed
          longitudeDelta: 0.01, // Adjust as needed
        },
        1000
      ); // 1000 milliseconds for animation duratio
    }
  };
  return (
    <SafeAreaView>
      <Weather />
      <Alert />
      <MainMap
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        tagChosen={tagChosen}
        resources={resources}
        filterChosen={filterChosen}
        setFilteredResources={setFilteredResources}
        filteredResources={filteredResources}
        mapRef={mapRef}
        initialRegion={initialRegion}
        handleSelectPlace={handleSelectPlace}
      />
      {selectedPlace ? (
        <>
          <ViewList handleResetSelectPlace={handleResetSelectPlace} />
          <BottomSlider
            resources={resources}
            selectedPlace={selectedPlace}
            handleSelectPlaceAbsolute={handleSelectPlaceAbsolute}
          />
        </>
      ) : (
        <>
          <TagList
            tagChosen={tagChosen}
            setTagChosen={setTagChosen}
            setIsFilterOpen={setIsFilterOpen}
            tags={amenities}
            setFilterChosen={setFilterChosen}
          />
          {isFilterOpen && <OverLay onTap={handleFilterClose} />}
          {!isFilterOpen ? (
            <ResourceBottomSheet
              index={1}
              snapPoints={snapPoints}
              tagChosen={tagChosen}
              resources={resources}
              filterChosen={filterChosen}
              handleSelectPlaceAbsolute={handleSelectPlaceAbsolute}
              bottomSheetRef={bottomSheetRef}
            />
          ) : (
            <FilterBottomSheet
              handleFilterClose={handleFilterClose}
              filterChosen={filterChosen}
              setFilterChosen={setFilterChosen}
              tags={tags}
              tagChosen={tagChosen}
              resources={resources}
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
