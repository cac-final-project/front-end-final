import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
const FilterIcon = require("@/assets/images/resource/FilterTag.png");

interface FilterTagProps {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterTag: React.FC<FilterTagProps> = ({ setIsFilterOpen }) => {
  const styles = getStyles();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsFilterOpen(true)}
    >
      <View style={styles.imageContainer}>
        <Image source={FilterIcon} />
      </View>
    </TouchableOpacity>
  );
};

function getStyles() {
  return StyleSheet.create({
    container: {
      marginRight: 8,
      marginLeft: 16,
    },
    imageContainer: {
      backgroundColor: Colors.white,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.16,
      shadowRadius: 4,
      elevation: 4,
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      padding: 8,
    },
  });
}

export default FilterTag;
