import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { RouteNames } from "@/typings/StackParam";
import { useRoute } from "@react-navigation/native";
import { PostType } from "@/typings/heatLevels";
import { IPostDetail } from "@/typings/post";
import { useRecoilValue } from "recoil";
import { loginInfoAtom } from "@/state/atoms/login";

const ElipsisIcon = require("@/assets/images/elipsis.png");

interface HeaderProps {
  onEllipsisPress: () => void; // New prop
  post: IPostDetail;
}

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    post_id: number;
    post_type: PostType;
  };
};

const Header: React.FC<HeaderProps> = ({ onEllipsisPress, post }) => {
  const route = useRoute<RouteType>();
  const {
    params: { post_id, post_type },
  } = route;
  const loginInfo = useRecoilValue(loginInfoAtom);
  const { author, type } = post;
  const isAuthor = loginInfo.username === author ? true : false;
  return (
    <View style={styles.container}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>
          {type === "tip" ? "Tip" : "Campaign"}
        </Text>
      </View>
      {isAuthor && (
        <TouchableOpacity
          onPress={onEllipsisPress}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Image source={ElipsisIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: Colors.darkGrey,
    borderRadius: 8,
  },
  tagText: {
    color: Colors.white,
    fontSize: 10,
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: 10,
    letterSpacing: 0.3,
  },
});

export default Header;
