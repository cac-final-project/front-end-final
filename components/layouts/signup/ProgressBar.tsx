import React, { useRef, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";
export type progress = 0 | 1 | 2 | 3;

interface ProgressBarProps {
  progress: progress;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const widthAnim = useRef(new Animated.Value(progress * 0.3333)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress * 0.3333,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            styles.levelBar,
            {
              width: widthAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#E3E3E3",
    marginBottom: 20,
  },
  levelBar: {
    height: "100%",
    backgroundColor: "#F1A83A",
  },
});

export default ProgressBar;
