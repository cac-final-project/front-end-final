import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNavigationProp, RouteNames } from "@/typings/StackParam";
import { PostType, WriteType } from "@/typings/heatLevels";

const LocationIcon = require("@/assets/images/write/Location.png");

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    post_id?: number;
    post_type: PostType;
    write_type: WriteType;
  };
};

interface LocationProps {
  addressName: string;
}

const Location: React.FC<LocationProps> = ({ addressName }) => {
  const route = useRoute<RouteType>();
  const {
    params: { post_type, write_type },
  } = route;
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleSetIsLocationOpen = () => {
    if (post_type === "tip") {
      alert("You can only write Tips in the current Neighborhood");
    } else {
      navigate("PostEditLocation", { post_type, write_type });
    }
  };

  const [location, setLocation] = useState("");

  const handleLocation = async () => {
    setLocation("Current location");
  };

  useEffect(() => {
    if (post_type === "tip") {
      handleLocation();
    }
  }, [post_type]);

  return (
    <TouchableOpacity onPress={handleSetIsLocationOpen}>
      <View style={styles.InputWrapper}>
        <Image source={LocationIcon} />
        <Text style={styles.categoryLocationTitle}>Location</Text>
        <View style={styles.locationContainer}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.locationText}
          >
            {addressName}
          </Text>
          {/* {location ? (
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.locationText}
            >
              {location}
            </Text>
          ) : (
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.emptyText}
            >
              Empty
            </Text>
          )} */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  InputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  categoryLocationTitle: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
    fontSize: 13,
    marginLeft: 5,
  },
  locationContainer: {
    marginLeft: 18,
  },
  locationText: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    marginRight: 3,
    letterSpacing: 0.39,
  },
  emptyText: {
    color: Colors.darkGrey,
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
  },
});

export default Location;
