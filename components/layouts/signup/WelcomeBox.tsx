import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

interface WelcomeBoxProps {
  userType: "user" | "volunteer";
  handleMoveProgress: () => void;
}

const WelcomeBox: React.FC<WelcomeBoxProps> = ({
  userType,
  handleMoveProgress,
}) => {
  return (
    <TouchableOpacity onPress={handleMoveProgress}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {userType === "user" ? "USER" : "Volunteer"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: 30 },
  container: {
    backgroundColor: Colors.grey,
    borderRadius: 8,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 65,
    paddingHorizontal: 29,
    marginBottom: 24,
  },
  text: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: "PlusJakartaSans-Bold",
  },
});

export default WelcomeBox;
