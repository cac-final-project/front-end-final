import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "@/constants/Colors";

const text =
  "Hello community! I’m Chani Yang. Good to meet you all. Lorem ipsum dolor sit amet consectetur. At accumsan dui leo arcu sed lectus nam. Mattis vel egestas nulla non sagittis. Sodales justo turpis ac neque eget velit urna sed suscipit. Lorem ipsum dolor sit amet consectetur. At accumsan dui leo arcu sed lectus nam. Mattis vel egestas nulla non sagittis. Sodales justo turpis ac neque eget velit urna sed suscipit.";

const Bio: React.FC = () => {
  const [bioText, setBioText] = useState(text);
  return (
    <View style={styles.container}>
      <Text style={styles.bioTitle}>Introduction</Text>
      <View style={styles.bioTextContainer}>
        <TextInput
          style={styles.bioText}
          multiline={true}
          onChangeText={setBioText}
          value={bioText}
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
