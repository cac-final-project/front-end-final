import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { InputBox, LocationItem } from "./index";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { Colors } from "@/constants/Colors";

const NavIcon = require("@/assets/images/write/location/SmallNav.png");

const SearachLocation: React.FC = () => {
  const [searchword, setSearchWord] = useState("");
  const handleDelete = () => {
    setSearchWord("");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <InputBox
          searchword={searchword}
          onSearchwordChange={setSearchWord}
          handleDelete={handleDelete}
        />
        <TouchableOpacity>
          <View style={styles.myLocationContainer}>
            <Image source={NavIcon} />
            <Text style={styles.locationText}>My Location</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
        <BottomSheetScrollView style={styles.results}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return <LocationItem key={item} />;
          })}
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

export default SearachLocation;
