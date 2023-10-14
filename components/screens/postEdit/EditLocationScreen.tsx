import React, { useMemo, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  MainMap,
  StickyNav,
  ConfirmLocation,
  SearachLocation,
} from "@/components/layouts/postEdit/postEditLocation/index";
import { Colors } from "@/constants/Colors";
import BottomSheet from "@gorhom/bottom-sheet";

const EditLocationScreen: React.FC = () => {
  const snapPoints = useMemo(() => ["5%", "90%"], []);

  const [bottomSheetIndex, setBottomSheetIndex] = useState(0); // 0: Closed, 1: Open

  const handleSearchIconClick = () => {
    setBottomSheetIndex((prev) => (prev === 1 ? 0 : 1)); // Toggle the bottom sheet state
  };

  const handleSheetChanges = (index: number) => {
    setBottomSheetIndex(index); // Update the bottomSheetIndex state when bottom sheet is manually adjusted
  };

  return (
    <SafeAreaView style={styles.container}>
      <MainMap />
      <ConfirmLocation handleSearchIconClick={handleSearchIconClick} />
      <StickyNav />
      <BottomSheet
        index={bottomSheetIndex}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={styles.bottomSheet}
      >
        <SearachLocation />
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bottomSheet: {
    zIndex: 2,
  },
});

export default EditLocationScreen;
