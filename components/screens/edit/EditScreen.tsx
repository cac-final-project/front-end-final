import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { TopImage } from "@/components/common/profile/index";
import { Contact, Bio } from "@/components/layouts/edit/index";

const EditProfile: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopImage />
        <Contact />
        <Bio />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.white,
  },
});

export default EditProfile;
