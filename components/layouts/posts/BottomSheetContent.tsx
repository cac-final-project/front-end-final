import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "@/constants/Colors";

const EditIconIcon = require("@/assets/images/EditPost.png");
const DeleteIcon = require("@/assets/images/Delete.png");

interface BottomSheetContentProps {
  onOptionTap: (toDo: "edit" | "delete") => void;
  postSelected: number | null;
}

const BottomSheetContent: React.FC<BottomSheetContentProps> = ({
  onOptionTap,
  postSelected,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => onOptionTap("edit")}
      >
        <Image source={EditIconIcon} />
        <Text style={styles.textEdit}>Edit post</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => onOptionTap("delete")}
      >
        <Image source={DeleteIcon} style={styles.deleteIcon} />
        <View style={styles.deleteText}>
          <Text style={styles.textDelete}>Delete post</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: "center",
    gap: 16,
  },
  deleteIcon: {
    marginLeft: 3,
  },
  deleteText: {
    marginLeft: 6,
  },
  option: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    gap: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  textEdit: {
    color: Colors.lightBlack,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Medium",
  },
  textDelete: {
    color: Colors.error,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Medium",
  },
});

export default BottomSheetContent;
