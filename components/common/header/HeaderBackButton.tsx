import React from "react";
import { SafeAreaView, Text, Image } from "react-native";
import {
  HeaderBackButton as OriginalHeaderBackButton,
  HeaderBackButtonProps,
} from "@react-navigation/elements";

const backIcon = require("@/assets/images/BackIcon.png");

const CustomBackButton: React.FC<HeaderBackButtonProps> = (props) => {
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
};

export default CustomBackButton;
