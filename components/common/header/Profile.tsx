import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const ProfileIcon = require("@/assets/images/Profile.png");

const Profile: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleProfileClick = () => {
    navigation.navigate("Login");
  };
  return (
    <TouchableOpacity onPress={handleProfileClick}>
      <SafeAreaView style={styles.rightBox}>
        <Image source={ProfileIcon} />
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rightBox: {
    marginRight: 16,
  },
});

export default Profile;
