import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface ContactProps {
  nickname?: string;
  phone_no?: string;
}

const Contact: React.FC<ContactProps> = ({ nickname, phone_no }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contactDetailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Name</Text>
        </View>
        <Text style={styles.contentText}>{nickname}</Text>
      </View>
      <View style={styles.contactDetailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Contact</Text>
        </View>
        <Text style={styles.contentText}>+1 {phone_no}</Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  contactDetailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 16,
  },
  title: {
    color: Colors.darkGrey,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Medium",
  },
  titleContainer: {
    width: 86,
    marginRight: 8,
  },
  contentText: {
    color: Colors.black,
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
  },
  line: {
    borderWidth: 1,
    borderColor: Colors.grey,
    marginBottom: 16,
  },
});

export default Contact;
