import React, { useState } from "react";
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

interface PhoneNumbProp {
  phoneNo: string;
  setPhoneNo: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneNumb: React.FC<PhoneNumbProp> = ({ phoneNo, setPhoneNo }) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleClick = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Enter your phone number to reset a password.
      </Text>

      <View style={styles.phoneContainer}>
        <View style={styles.countryNoBox}>
          <Text style={styles.countryNoText}>US +1</Text>
        </View>
        <View style={styles.phoneNoBox}>
          <TextInput
            placeholder="Enter phone number"
            keyboardType="numeric"
            value={phoneNo}
            onChangeText={(text) => {
              // Remove any non-numeric characters
              const numericText = text.replace(/[^0-9]/g, "");
              setPhoneNo(numericText);
            }}
            style={styles.phoneNoInput}
          />
        </View>
      </View>
      <Text style={styles.errorText}>
        This phone number hasn’t signed up yet.
      </Text>

      <TouchableOpacity onPress={handleClick} style={styles.backToLoginBox}>
        <Text style={styles.backToLoginLink}>Back to sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    paddingTop: 36,
    paddingHorizontal: 24,
  },

  titleText: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.42,
  },
  phoneContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  countryNoBox: {
    backgroundColor: Colors.phoneInputColor,
    padding: 16,
    borderRadius: 16,
    justifyContent: "center",
    marginRight: 8,
  },
  countryNoText: {
    color: Colors.black,
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Regular",
    lineHeight: 22.6,
    letterSpacing: 0.15,
  },
  phoneNoBox: {
    backgroundColor: Colors.phoneInputColor,
    padding: 16,
    borderRadius: 16,
  },
  phoneNoInput: {
    color: Colors.black,
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Regular",
    width: 190,
    lineHeight: 22.6,
    letterSpacing: 0.15,
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
  backToLoginBox: {
    width: 120,
    marginTop: 16,
  },
  backToLoginLink: {
    color: Colors.linkColor,
    fontSize: 12,
    fontFamily: "PlusJakartaSans-Regular",
    fontWeight: "400",
    textDecorationLine: "underline",
    letterSpacing: 0.36,
  },
});

export default PhoneNumb;
