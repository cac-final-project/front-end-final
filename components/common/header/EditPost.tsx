import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";

const EditPost: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleEdit = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={handleEdit}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text style={styles.contentText}>Edit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentText: {
    color: Colors.primary,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Bold",
    marginRight: 16,
  },
});

export default EditPost;
