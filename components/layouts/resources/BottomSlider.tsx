import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import ResourceItem from "./ResourceItem";
import { TResource } from "@/typings/resources";
import { useRecoilState } from "recoil";
import { isAlertOpenAtom } from "@/state/atoms/alert";

interface BottomSliderProps {
  resources: TResource[];
  selectedPlace: undefined | number;
  handleSelectPlaceAbsolute: (
    type: "sheet" | "slider",
    id: number,
    lat: number,
    lon: number
  ) => void;
}

const BottomSlider: React.FC<BottomSliderProps> = ({
  resources,
  selectedPlace,
  handleSelectPlaceAbsolute,
}) => {
  const [isAlertOpen, setIsAlertOpen] = useRecoilState(isAlertOpenAtom);

  const [selectedResource, setSelectedResource] = useState<TResource>();

  useEffect(() => {
    const filtered = resources.find((item) => {
      return item.id === selectedPlace;
    });
    setSelectedResource(filtered);
  }, [selectedPlace]);

  const styles = getStyles(isAlertOpen);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {resources?.length !== 0 && selectedResource && (
          <View style={styles.firstElement}>
            <ResourceItem item={selectedResource} />
          </View>
        )}
        {resources?.length !== 0 &&
          resources?.map((item, idx) => {
            const { id, lat, lon } = item;
            return (
              <TouchableOpacity
                key={idx}
                style={styles.restElement}
                onPress={() =>
                  handleSelectPlaceAbsolute("slider", id, lat, lon)
                }
              >
                <ResourceItem item={item} />
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

function getStyles(isAlertOpen: boolean) {
  return StyleSheet.create({
    container: {
      position: "absolute",
      backgroundColor: "transparent", // Ensure it's transparent
      bottom: isAlertOpen ? 80 : 100,
    },
    firstElement: {
      borderRadius: 8,
      marginLeft: 45,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.16,
      shadowRadius: 4,
      elevation: 4,
      minWidth: 250,
    },
    restElement: {
      borderRadius: 8,
      marginLeft: 16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.16,
      shadowRadius: 4,
      elevation: 4,
      minWidth: 250,
    },
    scrollContainer: {},
  });
}

export default BottomSlider;
