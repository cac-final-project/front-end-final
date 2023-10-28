import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useRecoilState } from "recoil";
import { isAlertOpenAtom } from "@/state/atoms/alert";

const ViewListIcon = require("@/assets/images/resource/ViewList.png");

interface ViewListProps {
  handleResetSelectPlace: () => void;
}

const ViewList: React.FC<ViewListProps> = ({ handleResetSelectPlace }) => {
  const [isAlertOpen, setIsAlertOpen] = useRecoilState(isAlertOpenAtom);
  const styles = getStyles(isAlertOpen);
  return (
    <TouchableOpacity onPress={handleResetSelectPlace} style={styles.container}>
      <Image source={ViewListIcon} />
      <Text style={styles.text}>View list</Text>
    </TouchableOpacity>
  );
};

function getStyles(isAlertOpen: boolean) {
  return StyleSheet.create({
    container: {
      position: "absolute",
      bottom: isAlertOpen ? 200 : 220,
      left: 50,
      flexDirection: "row",
      backgroundColor: Colors.white,
      alignItems: "center",
      padding: 8,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.16,
      shadowRadius: 4,
      elevation: 4,
    },
    text: {
      color: Colors.black,
      fontSize: 12,
      fontFamily: "PlusJakartaSans-Regular",
      marginLeft: 4,
    },
  });
}

export default ViewList;
