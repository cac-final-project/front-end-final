import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";

interface ResourceItemProps {
  image_url: number;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ image_url }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconInfoContainer}>
        <View style={styles.iconContainer}>
          <Image source={image_url} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.streetDistanceContainer}>
            <View style={styles.streetContainer}>
              <Text style={styles.streetnameText}>Streetname</Text>
              <Text style={styles.distanceText}>200m</Text>
            </View>
          </View>
          <View style={styles.tagsContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Free</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Wheelchair</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: Colors.signupBoxBorder,
    borderWidth: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  iconInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "stretch",
  },
  iconContainer: {
    width: 48,
    marginRight: 8,
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    textAlign: "center",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  streetDistanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  streetContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingRight: 8,
  },
  streetnameText: {
    color: Colors.black,
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: 19.5,
    letterSpacing: 0.3,
  },
  distanceText: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
  },
  chevronIcon: {
    width: 24,
    height: 24,
    opacity: 0.45,
  },
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "stretch",
    marginTop: 8,
  },
  tag: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: Colors.postBorder,
    borderRadius: 8,
    marginRight: 8,
  },
  tagText: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
  },
});

export default ResourceItem;
