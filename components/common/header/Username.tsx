import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const Username: React.FC = () => {
  const [username, setUsername] = useState("Username");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nameText}>{username}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    paddingHorizontal: 10, // adding a bit of padding to prevent the text from touching the edges
  },
  nameText: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.16,
    textAlign: "center", // ensure text is centered if it wraps to multiple lines
    flexWrap: "wrap",
    flexShrink: 1,
    width: "100%", // take full width of the container
  },
});

export default Username;
