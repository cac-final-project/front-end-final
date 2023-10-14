import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

interface OverlayProps {
  onTap: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onTap }) => {
  return (
    <TouchableWithoutFeedback onPress={onTap}>
      <View style={styles.overlayContainer}>
        <View style={styles.overlay} />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    width: "100%", // Adjust these dimensions according to your requirements
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.40)",
  },
});

export default Overlay;
