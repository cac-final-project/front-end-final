import React from "react";
import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";

const Profile: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleProfileClick = () => {
    navigation.navigate("Login");
  };
  return (
    <TouchableOpacity onPress={handleProfileClick}>
      <SafeAreaView>
        <Text>Profile</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default Profile;
