import React from "react";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";
import {
  HeaderBackButton as OriginalHeaderBackButton,
  HeaderBackButtonProps,
} from "@react-navigation/elements";
import { RouteNames } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";

const backIcon = require("@/assets/images/BackIcon.png");

interface Props extends HeaderBackButtonProps {
  routename: RouteNames;
}

const HeaderBackButton: React.FC<Props> = ({ routename, ...props }) => {
  // You can use `route` here now with its accurate type
  console.log(routename);

  return (
    <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
      {routename === "EditProfile" ? (
        <OriginalHeaderBackButton
          {...props}
          backImage={() => <Text style={styles.cancelText}>Cancel</Text>}
        />
      ) : (
        <OriginalHeaderBackButton
          {...props}
          backImage={() => (
            <Image source={backIcon} style={{ width: 24, height: 24 }} />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cancelText: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
  },
});

export default HeaderBackButton;
