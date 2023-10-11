import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";

interface NicknameInputProps {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

const NicknameInput: React.FC<NicknameInputProps> = ({
  nickname,
  setNickname,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.header}>Nickname</Text>
        <TextInput
          value={nickname}
          onChangeText={setNickname}
          style={styles.input}
          placeholder="Enter your nickname"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 24,
    flexDirection: "column",
  },
  inputBox: {
    marginBottom: 16,
  },
  header: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.42,
    marginBottom: 8,
  },
  input: {
    color: Colors.darkGrey,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.42,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
  },
});

export default NicknameInput;
