import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { commentAtom } from "@/state/atoms/comment";
import { useRecoilState } from "recoil";

const ContentInput: React.FC = () => {
  const [comment, setComment] = useRecoilState(commentAtom);
  return (
    <TextInput
      value={comment}
      onChangeText={setComment}
      style={styles.multiInputContainer}
      placeholderTextColor={Colors.darkGrey}
      multiline={true}
      scrollEnabled={true}
      placeholder="Tap here to continue..."
    />
  );
};

const styles = StyleSheet.create({
  multiInputContainer: {
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.45,
    color: Colors.black,
    marginBottom: 40,
  },
});

export default ContentInput;
