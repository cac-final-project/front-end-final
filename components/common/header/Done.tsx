import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp, RouteNames } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";
import { useRoute } from "@react-navigation/native";

type RouteType = {
  key: string;
  name: RouteNames;
};

const Done: React.FC = () => {
  const route = useRoute<RouteType>();
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleEditClick = () => {
    if (route.name === "PostEditTags") {
      navigation.goBack();
    } else {
      navigation.navigate("Profile");
    }
  };

  return (
    <TouchableOpacity onPress={handleEditClick}>
      <SafeAreaView style={styles.rightBox}>
        <Text style={styles.doneText}>Done</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rightBox: {
    backgroundColor: Colors.white,
    alignItems: "center", // icon to center
    marginRight: 16,
  },
  doneText: {
    color: Colors.primary,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Bold",
  },
});

export default Done;
