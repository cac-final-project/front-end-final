import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const Post: React.FC = () => {
  const handlePostClick = () => {};

  const handleVoteClick = (e: GestureResponderEvent, vote: "up" | "down") => {};

  return (
    <TouchableWithoutFeedback onPress={handlePostClick}>
      <View style={styles.container}>
        <View style={styles.leftBox}>
          <View style={styles.tipContainer}>
            <Text style={styles.tagText}>Tip</Text>
          </View>
          <Text style={styles.postTitle}>
            Staying Cool on the Street: A tip from experience
          </Text>
          <Text style={styles.postDate}>2023.09.20</Text>
        </View>
        <View style={styles.rightBox}>
          <View style={styles.rightBoxVoteContainer}>
            <TouchableOpacity onPress={(e) => handleVoteClick(e, "up")}>
              {/* <AntDesign name="up" size={26} color="black" /> */}
            </TouchableOpacity>
            <Text>28</Text>
            <TouchableOpacity onPress={(e) => handleVoteClick(e, "down")}>
              {/* <AntDesign name="down" size={26} color="black" /> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    gap: 8,
  },
  leftBox: {
    flex: 7,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },
  rightBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 8,
  },
  tipContainer: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: "#909090",
    borderRadius: 8,
  },
  tagText: {
    color: "white",
    fontSize: 10,
    fontWeight: "700",
  },
  postTitle: {
    color: Colors.black,
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.45,
  },
  postDate: {
    color: "#2B2B2B",
    fontSize: 10,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.3,
  },

  rightBoxVoteContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Post;
