import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Keyboard } from "react-native";
import { Colors } from "@/constants/Colors";

interface ContentInputProps {
  content: string;
  onChange: (text: string) => void;
}

const ContentInput: React.FC<ContentInputProps> = ({ content, onChange }) => {
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setIsKeyboardActive(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setIsKeyboardActive(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const styles = getStyles(isKeyboardActive);
  return (
    <TextInput
      value={content}
      onChangeText={onChange}
      style={styles.multiInputContainer}
      placeholderTextColor={Colors.darkGrey}
      multiline={true}
      scrollEnabled={true}
      placeholder="Tap here to continue..."
    />
  );
};
function getStyles(isKeyboardActive: boolean) {
  return StyleSheet.create({
    multiInputContainer: {
      maxHeight: isKeyboardActive ? 190 : null,
      fontSize: 15,
      fontFamily: "PlusJakartaSans-Regular",
      letterSpacing: 0.45,
      color: Colors.black,
      marginBottom: 40,
    },
  });
}

export default ContentInput;
