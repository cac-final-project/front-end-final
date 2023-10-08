import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { TopImage } from "@/components/common/profile/index";
import { Bio, Activities } from "@/components/layouts/profile/index";

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopImage />
        <Bio />
        <Activities />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
  },
});

export default ProfileScreen;
