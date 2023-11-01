import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { useRecoilState } from "recoil";
import { postAtom } from "@/state/atoms/post";

const SeeDetail: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [post, setPost] = useRecoilState(postAtom);
  const handleNavigate = () => {
    navigation.navigate("PostDetailMapView", {
      lat: post?.lat || 37.78825,
      lon: post?.lon || -122.4324,
      streetname: post?.addressName || "test street name",
    });
  };
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity onPress={handleNavigate}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>See detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "100%",
  },
  buttonContainer: {
    backgroundColor: Colors.headerTabGrey,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonText: {
    color: Colors.linkColor,
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Bold",
  },
});

export default SeeDetail;
