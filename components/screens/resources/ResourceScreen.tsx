import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
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

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const [tagChosen, setTagChosen] = useState<TAmenities>(undefined);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterChosen, setFilterChosen] = useState<string[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<undefined | number>();

  const setIsLoaded = useSetRecoilState(resourcesIsLoadedAtom);
  const locationValue = useRecoilValue(locationAtom);
  const [resources, setResources] = useState<TResource[]>([]);
  const [amenities, setAmenities] = useState<TAmenities[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const handleFilterClose = useCallback(() => {
    setIsFilterOpen(false);
  }, []);

  const handleFetchResourcesApi = useCallback(async () => {
    setIsLoaded(false);
    const res = await findResourcesApi(locationValue!);
    if (res !== false) {
      setIsLoaded(true);
      setAmenities(res?.data?.amenities || []);
      setTags(res?.data?.tags || []);
      setResources(res?.data?.data || []);
    } else {
      setAmenities([]);
      setTags([]);
      setResources([]);
    }
  }, [locationValue, setIsLoaded]);

  useEffect(() => {
    if (locationValue) {
      handleFetchResourcesApi();
    }
  }, [handleFetchResourcesApi]);

  const mapRef = useRef<MapView>(null);
  const [filteredResources, setFilteredResources] =
    useState<TResource[]>(resources);

  const maxDistance = useMemo(
    () =>
      Math.max(...filteredResources.map((resource) => resource.distance || 0)),
    [filteredResources]
  );
  const defaultDelta = 0.05;
  const latitudeDelta = maxDistance > 0 ? maxDistance * 0.00003 : defaultDelta;
  const longitudeDelta = maxDistance > 0 ? maxDistance * 0.00003 : defaultDelta;

  const initialRegion = useMemo(() => {
    return {
      latitude: 30.270398,
      longitude: -97.74285,
      latitudeDelta: defaultDelta,
      longitudeDelta: defaultDelta,
    };
  }, []);

  const currentRegion = useMemo(() => {
    if (!locationValue) return initialRegion;
    return {
      latitude: locationValue.lat,
      longitude: locationValue.lon,
      latitudeDelta,
      longitudeDelta,
    };
  }, [latitudeDelta, longitudeDelta, locationValue]);

  useEffect(() => {
    if (mapRef.current && locationValue) {
      mapRef.current.animateToRegion(currentRegion, 1000);
    }
  }, [currentRegion, locationValue]);

  const handleResetSelectPlace = useCallback(() => {
    setSelectedPlace(undefined);
    mapRef.current?.animateToRegion(currentRegion, 1000);
  }, [currentRegion]);

  const handleSelectPlaceAbsolute = useCallback(
    (type: "sheet" | "slider", id: number, lat: number, lon: number) => {
      if (type === "sheet") {
        closeSheet();
      }
      setSelectedPlace(id);
      const centerOffset = latitudeDelta * 0.003;
      mapRef.current?.animateToRegion(
        {
          latitude: lat + centerOffset,
          longitude: lon,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000
      );
    },
    [latitudeDelta, closeSheet]
  );

  const handleSelectPlace = useCallback(
    (id: number, lat: number, lon: number) => {
      if (id === selectedPlace) {
        setSelectedPlace(undefined);
        mapRef.current?.animateToRegion(currentRegion, 1000);
      } else {
        setSelectedPlace(id);
        const centerOffset = latitudeDelta * 0.003;
        mapRef.current?.animateToRegion(
          {
            latitude: lat + centerOffset,
            longitude: lon,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
          1000
        );
      }
    },
    [selectedPlace, initialRegion, latitudeDelta]
  );
  if (locationValue) {
    return (
      <SafeAreaView>
        <Weather />
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
        <Alert />
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
  }
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default ResourceScreen;
