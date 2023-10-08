import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Header,
  Details,
  Description,
  Instruction,
} from "@/components/layouts/alert/index";
import { Colors } from "@/constants/Colors";

const AlertScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Details />
        <View style={styles.line} />
        <Description />
        <Instruction />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: Colors.white,
  },
  line: { borderWidth: 1, borderColor: Colors.grey },
});

export default AlertScreen;
