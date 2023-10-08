import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

const bioText =
  "Hello community! I’m Chani Yang. Good to meet you all. Lorem ipsum dolor sit amet consectetur. At accumsan dui leo arcu sed lectus nam. Mattis vel egestas nulla non sagittis. Sodales justo turpis ac neque eget velit urna sed suscipit. Lorem ipsum dolor sit amet consectetur. At accumsan dui leo arcu sed lectus nam. Mattis vel egestas nulla non sagittis. Sodales justo turpis ac neque eget velit urna sed suscipit.";

const Bio: React.FC = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);

  const styles = getStyles();
  const handleSeeMoreClick = () => {
    setIsSeeMore((prev) => !prev);
  };

  const numberOfLines = isSeeMore ? undefined : 6; // adjust this value based on your design requirements
  return (
    <View style={styles.container}>
      <Text style={styles.bioTitle}>Introduction: </Text>
      <View style={styles.bioTextContainer}>
        <Text style={styles.bioText} numberOfLines={numberOfLines}>
          {bioText ? bioText : "Tell other users about you!"}
        </Text>
        <TouchableOpacity
          onPress={handleSeeMoreClick}
          style={styles.seeMoreTextContainer}
        >
          {!isSeeMore && <Text style={styles.seeMoreText}>See More</Text>}
        </TouchableOpacity>
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
