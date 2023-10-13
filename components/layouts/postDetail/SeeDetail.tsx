import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";

const SeeDetail: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleNavigate = () => {
    navigation.navigate("PostDetailMapView", {
      lat: 37.78825,
      lon: -122.4324,
      streetname: "test street name",
    });
  };
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity onPress={handleNavigate}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>See detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "100%",
  },
  buttonContainer: {
    backgroundColor: Colors.headerTabGrey,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonText: {
    color: Colors.linkColor,
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Bold",
  },
});

export default SeeDetail;
