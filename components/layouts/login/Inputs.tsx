import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";

type InputsProps = {
  userId: string;
  password: string;
  handleLoginInfo: (target: "id" | "pw", value: string) => void;
};

const Inputs: React.FC<InputsProps> = ({
  userId,
  password,
  handleLoginInfo,
}) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleForgotPwClick = () => {
    navigation.navigate("ForgotPw");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.header}>ID</Text>
        <TextInput
          value={userId}
          onChangeText={(value) => handleLoginInfo("id", value)}
          style={styles.input}
          placeholder="Enter your ID"
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.header}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(value) => handleLoginInfo("pw", value)}
          style={styles.input}
          placeholder="Enter your Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        onPress={handleForgotPwClick}
        style={styles.forgotPasswordBox}
      >
        <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
      </TouchableOpacity>
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
  forgotPasswordBox: {
    width: 120,
  },
  forgotPasswordLink: {
    color: Colors.linkColor,
    fontSize: 12,
    fontFamily: "PlusJakartaSans-Regular",
    fontWeight: "400",
    textDecorationLine: "underline",
    letterSpacing: 0.36,
  },
});

export default Inputs;
