import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";

interface AccountInputProps {
  username: string;
  password: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const AccountInput: React.FC<AccountInputProps> = ({
  username,
  password,
  setUsername,
  setPassword,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.header}>Nickname</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder="Enter your nickname"
        />
        <Text style={styles.errorText}>This ID already exists</Text>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.header}>Nickname</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
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
  errorText: {
    color: Colors.error,
    marginTop: 8,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.42,
  },
});

export default AccountInput;
