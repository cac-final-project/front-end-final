import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Post } from "@/components/common/profile/index";
import { profileAtom } from "@/state/atoms/profileEdit";
import { useRecoilValue } from "recoil";

const Activities: React.FC = () => {
  const profile = useRecoilValue(profileAtom);
  console.log("test", profile);
  return (
    <View style={styles.container}>
      <Text style={styles.activityTitle}>Activities</Text>
      {[1, 2, 3, 4, 5].map((item) => {
        return <Post key={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  activityTitle: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.64,
    marginBottom: 8,
  },
  activitiesContainer: {},
});

export default Activities;
