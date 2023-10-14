import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { WriteType } from "@/typings/heatLevels";

interface EditPostProps {
  write_type: WriteType;
}

const EditPost: React.FC<EditPostProps> = ({ write_type }) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleEdit = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={handleEdit}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text style={styles.contentText}>
        {write_type === "edit" ? "Edit" : "Post"}
      </Text>
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
