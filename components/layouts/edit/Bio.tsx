import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useRecoilState } from "recoil";
import { editProfileAtom } from "@/state/atoms/profileEdit";

const defaultText = "asdf";

const Bio: React.FC = () => {
  const [editProfile, setEditProfile] = useRecoilState(editProfileAtom);
  const handleOnChange = (text: string) => {
    setEditProfile((prev) => {
      return { ...prev, bio: text };
    });
  };

  useEffect(() => {
    setEditProfile((prev) => {
      return { ...prev, bio: defaultText };
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.bioTitle}>Introduction</Text>
      <View style={styles.bioTextContainer}>
        <TextInput
          style={styles.bioText}
          multiline={true}
          onChangeText={handleOnChange} // <-- Use handleOnChange here
          value={editProfile.bio} // <-- Use editProfile.bio as value here
        />
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
