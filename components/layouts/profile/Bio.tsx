import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useRecoilValue } from "recoil";
import { profileAtom } from "@/state/atoms/profileEdit";

const Bio: React.FC = () => {
  const profile = useRecoilValue(profileAtom);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [fullHeight, setFullHeight] = useState<number | null>(null);
  const [truncatedHeight, setTruncatedHeight] = useState<number | null>(null);

  const styles = getStyles();
  const handleSeeMoreClick = () => {
    setIsSeeMore((prev) => !prev);
  };

  const numberOfLines = isSeeMore ? undefined : 6;

  const showSeeMore =
    !isSeeMore &&
    truncatedHeight !== null &&
    fullHeight !== null &&
    fullHeight > truncatedHeight;

  return (
    <View style={styles.container}>
      <Text style={styles.bioTitle}>Bio: </Text>
      <View style={styles.bioTextContainer}>
        <Text
          style={[styles.bioText, { opacity: 0, position: "absolute" }]}
          onLayout={(event) => {
            setFullHeight(event.nativeEvent.layout.height);
          }}
        >
          {profile.bio ? profile.bio : "Tell other users about you!"}
        </Text>

        <Text
          style={styles.bioText}
          numberOfLines={numberOfLines}
          onLayout={
            isSeeMore
              ? undefined
              : (event) => {
                  setTruncatedHeight(event.nativeEvent.layout.height);
                }
          }
        >
          {profile.bio ? profile.bio : "Tell other users about you!"}
        </Text>

        {showSeeMore && (
          <TouchableOpacity
            onPress={handleSeeMoreClick}
            style={styles.seeMoreTextContainer}
          >
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

function getStyles() {
  return StyleSheet.create({
    container: {
      marginVertical: 24,
    },
    bioTitle: {
      fontSize: 16,
      fontFamily: "PlusJakartaSans-Bold",
      color: Colors.black,
    },
    bioTextContainer: {
      padding: 8,
      backgroundColor: Colors.lightGrey,
      borderRadius: 8,
    },
    bioText: {
      flex: 1, // This ensures that the Text component takes as much space as possible
      color: Colors.black,
      fontSize: 13,
      fontFamily: "PlusJakartaSans-Regular",
      lineHeight: 18.2,
      letterSpacing: 0.39,
    },
    seeMoreTextContainer: {
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 5, // Optional padding for spacing
    },
    seeMoreText: {
      color: Colors.primary,
      fontFamily: "PlusJakartaSans-Regular",
      fontSize: 13,
      textDecorationLine: "underline",
      letterSpacing: 0.39,
      lineHeight: 18.2,
    },
  });
}

export default Bio;
