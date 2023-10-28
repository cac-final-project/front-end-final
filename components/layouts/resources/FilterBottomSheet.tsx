import React, { useMemo, useCallback, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";
import { TAmenities, TResource } from "@/typings/resources";

interface FilterBottomSheetProps {
  setFilterChosen: React.Dispatch<React.SetStateAction<string[]>>;
  handleFilterClose: () => void;
  filterChosen: string[];
  tags: string[];
  tagChosen: TAmenities;
  resources: TResource[];
}

const FilterBottomSheet: React.FC<FilterBottomSheetProps> = ({
  setFilterChosen,
  handleFilterClose,
  filterChosen,
  tags,
  tagChosen,
  resources,
}) => {
  const [relevantTags, setRelevantTags] = useState<string[]>(tags);

  useEffect(() => {
    if (tagChosen) {
      const filteredResources = resources.filter((item) => {
        return item.amenity === tagChosen;
      });
      // Extract tags and flatten the array
      const extractedTags = filteredResources.map((item) => item.tags).flat();

      // Optional: Remove duplicates
      const uniqueTags = Array.from(new Set(extractedTags));
      setRelevantTags(uniqueTags);
    } else {
      setRelevantTags(tags);
    }
  }, []);

  const snapPoints = useMemo(() => ["12%", "50%"], []);

  const handleSheetChanges = useCallback((index: number) => {
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
          {relevantTags?.map((item, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => handleSetFilterChosen(item)}
              >
                <View style={getTagStyle(item)}>
                  <Text style={getTagTextStyle(item)}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
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
