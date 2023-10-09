import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";

interface SaveBtnProps {
  isPwConfirm: boolean;
}

const SaveBtn: React.FC<SaveBtnProps> = ({ isPwConfirm }) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const styles = getStyles(isPwConfirm);
  const handleClick = () => {
    if (isPwConfirm) {
      navigation.navigate("Login");
    }
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handleClick}>
        <View style={styles.container}>
          <Text style={styles.text}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

function getStyles(isPwConfirm: boolean) {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: 24,
      paddingBottom: 24,
      paddingTop: 0,
      marginTop: 7,
    },
    container: {
      padding: 16,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: isPwConfirm ? Colors.primary : Colors.grey,
    },
    text: {
      color: Colors.white,
      fontFamily: "PlusJakartaSans-Bold",
      fontSize: 16,
      letterSpacing: 0.48,
    },
  });
}

export default SaveBtn;
