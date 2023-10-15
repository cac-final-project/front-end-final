import React, { useMemo, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";

interface FilterBottomSheetProps {
  setFilterChosen: React.Dispatch<React.SetStateAction<string[]>>;
  handleFilterClose: () => void;
  filterChosen: string[];
}

const FilterBottomSheet: React.FC<FilterBottomSheetProps> = ({
  setFilterChosen,
  handleFilterClose,
  filterChosen,
}) => {
  const snapPoints = useMemo(() => ["12%", "50%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    if (index === 0) {
      handleFilterClose();
    }
  }, []);

  const handleSetFilterChosen = (item: string) => {
    setFilterChosen((prev) => {
      if (prev.includes(item)) {
        // Removing the item if it already exists in the array
        return prev.filter((existingItem) => existingItem !== item);
      } else {
        // Adding the item if it doesn't exist in the array
        return [...prev, item];
      }
    });
  };

  const getTagStyle = (item: string) => {
    // Check if the item is in filterChosen array
    const isSelected = filterChosen.includes(item);
    // Return a style object with a dynamic background color
    return [
      styles.tag,
      { backgroundColor: isSelected ? Colors.primary : Colors.postBorder },
    ];
  };

  const getTagTextStyle = (item: string) => {
    const isSelected = filterChosen.includes(item);
    return [
      styles.tagText,
      { color: isSelected ? Colors.white : Colors.black },
    ];
  };

  return (
    <BottomSheet
      style={styles.container}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <Text style={styles.heading}>Filter</Text>
      <BottomSheetScrollView style={styles.results}>
        <View style={styles.tagContainer}>
          <TouchableOpacity onPress={() => handleSetFilterChosen("Free")}>
            <View style={getTagStyle("Free")}>
              <Text style={getTagTextStyle("Free")}>Free</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSetFilterChosen("Unisex")}>
            <View style={getTagStyle("Unisex")}>
              <Text style={getTagTextStyle("Unisex")}>Unisex</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  results: {
    flex: 1,
  },
  spacer: {
    height: 100,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.postBorder,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },

  tagText: {
    fontSize: 13,
    color: Colors.black,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
  },
});

export default FilterBottomSheet;
