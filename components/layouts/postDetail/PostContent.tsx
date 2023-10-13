import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native"; // Import ScrollView instead of TextInput
import { Colors } from "@/constants/Colors";

const PostContent: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.contentText}>
          {
            "Hello beautiful community! 💙\n\nWith the ongoing heatwave, it's crucial for all of us to stay hydrated, especially our friends experiencing homelessness.\n\nI've teamed up with a few local businesses and we're setting up hydration stations at various points in the city."
          }
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  scrollView: {
    width: "100%",
  },
  contentText: {
    color: "#171717",
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0.39,
    textAlign: "justify",
  },
});

export default PostContent;
