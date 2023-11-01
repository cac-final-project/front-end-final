import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import InputBox from "./InputBox";
import LocationItem from "./LocationItem";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";
import { PlacePrediction } from "@/typings/google";
import { getPlacesApi, getPlaceDetails } from "@/api/google";
import { useRecoilValue } from "recoil";
import { locationAtom } from "@/state/atoms/location";

interface SearchLocationProps {
  setSelectedPlace: React.Dispatch<
    React.SetStateAction<PlacePrediction | null>
  >;
  closeBottomSheet: () => void;
}

const NavIcon = require("@/assets/images/write/location/SmallNav.png");

const SearchLocation: React.FC<SearchLocationProps> = ({
  setSelectedPlace,
  closeBottomSheet,
}) => {
  const location = useRecoilValue(locationAtom);
  const [searchword, setSearchWord] = useState("");
  const [recommendedPlaces, setRecommendedPlaces] =
    useState<PlacePrediction[]>();

  const handleDelete = () => {
    setSearchWord("");
  };

  const handleGetPlacesApi = useCallback(async () => {
    if (!searchword) return;

    const res = await getPlacesApi({
      query: searchword,
      latitude: location?.lat!,
      longitude: location?.lon!,
      radius: 5000,
    });
    setRecommendedPlaces(res.predictions);
  }, [searchword, location]);

  // Debounce function
  useEffect(() => {
    const handler = setTimeout(() => {
      handleGetPlacesApi();
    }, 1000); // 1 second delay

    return () => {
      clearTimeout(handler); // Clear the timeout if the search word changes
    };
  }, [searchword, handleGetPlacesApi]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <InputBox
          searchword={searchword}
          onSearchwordChange={setSearchWord}
          handleDelete={handleDelete}
        />
        <TouchableOpacity>
          {/* <View style={styles.myLocationContainer}>
            <Image source={NavIcon} />
            <Text style={styles.locationText}>My Location</Text>
          </View> */}
        </TouchableOpacity>
        <View style={styles.line} />
        <BottomSheetScrollView style={styles.results}>
          {recommendedPlaces?.length !== 0 &&
            recommendedPlaces?.map((place, index) => (
              <LocationItem
                key={index}
                place={place}
                searchword={searchword}
                setSelectedPlace={setSelectedPlace}
                closeBottomSheet={closeBottomSheet}
              />
            ))}
        </BottomSheetScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  myLocationContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: Colors.black,
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.45,
    marginLeft: 8,
  },
  line: { borderWidth: 1, borderColor: Colors.postBorder, marginVertical: 8 },
  results: {
    flex: 1,
  },
});

export default SearchLocation;
