import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  HeaderBackButton as OriginalHeaderBackButton,
  HeaderBackButtonProps,
} from "@react-navigation/elements";
import { RouteNames, ScreenNavigationProp } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const backIconWhite = require("@/assets/images/BackIcon.png");
const backIconBlack = require("@/assets/images/write/BackIcon.png");

interface Props extends HeaderBackButtonProps {
  routename: RouteNames;
}

const HeaderBackButton: React.FC<Props> = ({ routename, ...props }) => {
  if (routename === "EditProfile" || routename === "PostEdit") {
    return (
      <SafeAreaView
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 16 }}
      >
        <OriginalHeaderBackButton
          {...props}
          backImage={() => <Text style={styles.cancelText}>Cancel</Text>}
        />
      </SafeAreaView>
    );
  } else if (routename === "Weather" || routename === "Alert") {
    return (
      <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
        <OriginalHeaderBackButton
          {...props}
          backImage={() => <Feather name="x" size={24} color={Colors.white} />}
        />
      </SafeAreaView>
    );
  } else if (routename === "PostEditTags" || routename === "PostEditLocation") {
    const navigation = useNavigation<ScreenNavigationProp>();
    const handleGoBack = () => {
      navigation.goBack();
    };
    return (
      <SafeAreaView
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 16 }}
      >
        <TouchableOpacity
          onPress={handleGoBack}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Image source={backIconBlack} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
        <OriginalHeaderBackButton
          {...props}
          backImage={() => (
            <Image source={backIconWhite} style={{ width: 24, height: 24 }} />
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
