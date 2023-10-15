import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

const ViewListIcon = require("@/assets/images/resource/ViewList.png");

interface ViewListProps {
  setSelectedPlace: React.Dispatch<React.SetStateAction<undefined | string>>;
}

const ViewList: React.FC<ViewListProps> = ({ setSelectedPlace }) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedPlace(undefined)}
      style={styles.container}
    >
      <Image source={ViewListIcon} />
      <Text style={styles.text}>View list</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 190,
    left: 50,
    flexDirection: "row",
    backgroundColor: Colors.white,
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    color: Colors.black,
    fontSize: 12,
    fontFamily: "PlusJakartaSans-Regular",
    marginLeft: 4,
  },
});

export default ViewList;