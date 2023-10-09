import React from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const Profile: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleProfileClick = () => {
    navigation.navigate("Login");
  };
  return (
    <TouchableOpacity onPress={handleProfileClick}>
      <SafeAreaView style={styles.rightBox}>
        <FontAwesome5 name="user" size={20} color="black" />
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rightBox: {
    backgroundColor: Colors.grey,
    padding: 8,
    borderRadius: 8,
    alignItems: "center", // icon to center
    marginRight: 16,
  },
});

export default Profile;
