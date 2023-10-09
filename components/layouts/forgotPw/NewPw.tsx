import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Colors } from "@/constants/Colors";

const EyeIcon = require("@/assets/images/EyeSlash.png");

interface NewPwProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPw: string;
  setConfirmPw: React.Dispatch<React.SetStateAction<string>>;
}

const NewPw: React.FC<NewPwProps> = ({
  password,
  setPassword,
  setConfirmPw,
  confirmPw,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.header}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Enter new password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Image source={EyeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.header}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            value={confirmPw}
            onChangeText={setConfirmPw}
            style={styles.input}
            placeholder="Confirm password"
            secureTextEntry
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    paddingHorizontal: 24,
    flexDirection: "column",
  },
  header: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.42,
    marginBottom: 8,
  },
  inputBox: {
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    color: Colors.darkGrey,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.42,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  eyeIcon: {
    marginRight: 16,
  },
});

export default NewPw;
