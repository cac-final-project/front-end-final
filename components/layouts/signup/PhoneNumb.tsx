import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Colors } from "@/constants/Colors";

const LockIcon = require("@/assets/images/Lock.png");

interface PhoneNumbProps {
  phoneNo: string;
  setPhoneNo: React.Dispatch<React.SetStateAction<string>>;
  handleMoveProgress: () => void;
}

const PhoneNumb: React.FC<PhoneNumbProps> = ({
  phoneNo,
  setPhoneNo,
  handleMoveProgress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        We protect our community by making sure everyone on APP NAME is verified
      </Text>

      <Text style={styles.inputTitleText}>Phone Number</Text>
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
      <View style={styles.infoBox}>
        <Image source={LockIcon} style={styles.lockImage} />
        <Text style={styles.infoText}>
          We will never share this without your confirmation and it will not be
          shown on your profile
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    paddingTop: 32,
    paddingHorizontal: 24,
  },

  inputTitleText: {
    marginTop: 16,
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.42,
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
  infoBox: {
    marginTop: 42,
    flexDirection: "row",
    alignItems: "center",
  },
  lockImage: {
    marginRight: 4,
    padding: 4,
  },
  infoText: {
    color: Colors.darkGrey,
    fontSize: 12,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.42,
  },
});

export default PhoneNumb;
