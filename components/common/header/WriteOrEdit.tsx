import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { RouteNames } from "@/typings/StackParam";
import { useRoute } from "@react-navigation/native";
import { post_type, write_type } from "@/typings/heatLevels";

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    post_id: number;
    post_type: post_type;
    write_type: write_type;
  };
};

const WriteOrEdit: React.FC = () => {
  const route = useRoute<RouteType>();
  const {
    params: { post_id, post_type, write_type },
  } = route;
  return (
    <SafeAreaView>
      <Text style={styles.contentText}>
        {write_type === "edit" ? "Edit" : "Write"}{" "}
        {post_type === "tip" ? "Tip" : "Campaign"}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentText: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: 24,
    letterSpacing: 0.48,
  },
});

export default WriteOrEdit;
