import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { RouteNames } from "@/typings/StackParam";
import { useRoute } from "@react-navigation/native";
import { PostType, WriteType } from "@/typings/heatLevels";

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    post_id?: number;
    post_type: PostType;
    write_type: WriteType;
  };
};

const WriteOrEdit: React.FC = () => {
  const route = useRoute<RouteType>();
  const {
    params: { post_id, post_type, write_type },
  } = route;
  const { name } = route;
  if (name === "PostEditLocation") {
    return (
      <SafeAreaView>
        <Text style={styles.locationText}>Select location</Text>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <Text style={styles.contentText}>
          {write_type === "edit" ? "Edit " : "Write "}
          {post_type === "tip" ? "Tip" : "Campaign"}
        </Text>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  locationText: {
    color: Colors.black,
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.48,
  },
  contentText: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: 24,
    letterSpacing: 0.48,
  },
});

export default WriteOrEdit;
