import React, { useMemo, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import CustomMarker from "./CustomMarker";
import { TAmenities, TResource } from "@/typings/resources";

interface InitialRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface MainMapProps {
  selectedPlace: undefined | number;
  setSelectedPlace: React.Dispatch<React.SetStateAction<undefined | number>>;
  tagChosen: TAmenities;
  resources: TResource[];
  filterChosen: string[];
  setFilteredResources: React.Dispatch<React.SetStateAction<TResource[]>>;
  filteredResources: TResource[];
  mapRef: React.RefObject<MapView>;
  initialRegion: InitialRegion;
  handleSelectPlace: (id: number, lat: number, lon: number) => void;
}

const MainMap: React.FC<MainMapProps> = ({
  selectedPlace,
  setSelectedPlace,
  tagChosen,
  resources,
  filterChosen,
  setFilteredResources,
  filteredResources,
  mapRef,
  initialRegion,
  handleSelectPlace,
}) => {
  // useMemo to calculate filtered resources
  const memoFilteredResources = useMemo(() => {
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
    return tempFilteredResources;
  }, [resources, tagChosen, filterChosen]);

  // Effect to update state of filtered resources
  useEffect(() => {
    setFilteredResources(memoFilteredResources);
  }, [memoFilteredResources]);

  return (
    <MapView
      ref={mapRef}
      initialRegion={initialRegion}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
    >
      {resources.length !== 0 &&
        filteredResources.map((item) => {
          const { address, lat, lon, id } = item;
          return (
            <Marker
              key={id}
              coordinate={{
                latitude: lat,
                longitude: lon,
              }}
              onPress={() => handleSelectPlace(id, lat, lon)}
            >
              <CustomMarker
                selectedPlace={selectedPlace}
                setSelectedPlace={setSelectedPlace}
                item={item}
              />
            </Marker>
          );
        })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MainMap;
