import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";

interface InputTitleProps {
  title: string;
  onChange: (text: string) => void;
}

const InputTitle: React.FC<InputTitleProps> = ({ title, onChange }) => {
  return (
    <View style={styles.inputTitleWrapper}>
      <TextInput
        placeholder="Untitled"
        placeholderTextColor={Colors.darkGrey}
        autoFocus={true}
        multiline={true}
        numberOfLines={2} // You can adjust this as needed
        style={styles.inputTitleText} // Increase height as needed
        value={title}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputTitleWrapper: {
    marginBottom: 16,
  },
  inputTitleText: {
    fontSize: 20,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.6,
  },
});

export default InputTitle;
