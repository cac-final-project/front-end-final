import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";

const EditIcon = require("@/assets/images/Edit.png");

const Edit: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleEditClick = () => {
    navigation.navigate("EditProfile");
  };
  return (
    <TouchableOpacity onPress={handleEditClick}>
      <SafeAreaView style={styles.rightBox}>
        <Image source={EditIcon} />
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rightBox: {
    backgroundColor: Colors.grey,
    padding: 8,
    paddingRight: 6,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 16,
  },
});

export default Edit;
