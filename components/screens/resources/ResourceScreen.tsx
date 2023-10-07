import React from "react";
import { View, Text } from "react-native";
import { Weather, Alert } from "@/components/layouts/resources/index";

const ResourceScreen: React.FC = () => {
  return (
    <View>
      <Weather />
      <Alert />
    </View>
  );
};

export default ResourceScreen;
