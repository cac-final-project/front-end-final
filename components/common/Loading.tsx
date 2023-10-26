import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

interface LoadingOverLayProps {
  isLoaded: boolean;
}

const LoadingOverLay: React.FC<LoadingOverLayProps> = ({ isLoaded }) => {
  if (!isLoaded) {
    return (
      <View style={styles.overlayContainer}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return null;
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
    zIndex: 1000,
    elevation: 1000, // for Android
    backgroundColor: "rgba(0, 0, 0, 0.40)", // Semi-transparent background
  },
});

export default LoadingOverLay;
