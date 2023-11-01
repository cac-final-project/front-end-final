import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useRecoilState, useRecoilValue } from "recoil";
import { editProfileAtom } from "@/state/atoms/profileEdit";
import { profileAtom } from "@/state/atoms/profileEdit";

interface BioProps {
  bio?: string;
}

const Bio: React.FC<BioProps> = ({ bio }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bioTitle}>Bio</Text>
      <View style={styles.bioTextContainer}>
        <TextInput style={styles.bioText} multiline={true} value={bio} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  bioTitle: {
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Medium",
    color: Colors.darkGrey,
  },
  bioTextContainer: {
    padding: 8,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    marginTop: 8,
  },
  bioText: {
    flex: 1, // This ensures that the TextInput component takes as much space as possible
    color: Colors.darkGrey,
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    lineHeight: 18.2,
    letterSpacing: 0.39,
  },
});

export default Bio;
