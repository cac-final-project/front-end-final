import React from "react";
import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import {
  Header,
  Details,
  Description,
  Instruction,
} from "@/components/layouts/alert/index";
import { Colors } from "@/constants/Colors";
import { emergencyAtom } from "@/state/atoms/emergency";
import { useRecoilValue } from "recoil";

const AlertScreen: React.FC = () => {
  const emergency = useRecoilValue(emergencyAtom);
  if (emergency) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header emergency={emergency} />
          <Details emergency={emergency} />
          <View style={styles.line} />
          <Description emergency={emergency} />
          <Instruction emergency={emergency} />
        </ScrollView>
      </SafeAreaView>
    );
  }
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
