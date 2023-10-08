import React from "react";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";
import {
  HeaderBackButton as OriginalHeaderBackButton,
  HeaderBackButtonProps,
} from "@react-navigation/elements";
import { RouteNames } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";

const backIcon = require("@/assets/images/BackIcon.png");

interface Props extends HeaderBackButtonProps {
  routename: RouteNames;
}

const HeaderBackButton: React.FC<Props> = ({ routename, ...props }) => {
  // You can use `route` here now with its accurate type
  console.log(routename);

  if (routename === "EditProfile") {
    return (
      <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
        <OriginalHeaderBackButton
          {...props}
          backImage={() => <Text style={styles.cancelText}>Cancel</Text>}
        />
      </SafeAreaView>
    );
  } else if (routename === "Weather" || "Alert") {
    // Customize this section for your "Weather" condition
    return (
      <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
        <OriginalHeaderBackButton
          {...props}
          backImage={() => (
            // Replace the content in this function with whatever you want for the "Weather" route
            <Feather name="x" size={24} color={Colors.white} />
          )}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
        <OriginalHeaderBackButton
          {...props}
          backImage={() => (
            <Image source={backIcon} style={{ width: 24, height: 24 }} />
          )}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  cancelText: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
  },
  weatherText: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Bold",
  },
});

export default HeaderBackButton;
