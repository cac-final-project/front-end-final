import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Weather, Alert } from "@/components/layouts/resources/index";

const ResourceScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Weather />
      <Alert />
    </SafeAreaView>
  );
};

export default ResourceScreen;
