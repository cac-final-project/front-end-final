import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { headerTabType } from "@/components/screens/posts/PostsScreen";

interface HeaderTabProps {
  headerTab: headerTabType;
  setHeaderTab: React.Dispatch<React.SetStateAction<headerTabType>>;
}

const HeaderTab: React.FC<HeaderTabProps> = ({ headerTab, setHeaderTab }) => {
  const styles = getStyles(headerTab);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setHeaderTab("tip")}
        style={styles.tipBox}
      >
        <Text style={styles.text}>Tips</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setHeaderTab("campaign")}
        style={styles.campaignBox}
      >
        <Text style={styles.text}>Campaigns</Text>
      </TouchableOpacity>
    </View>
  );
};

function getStyles(headerTab: headerTabType) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    tipBox: {
      paddingVertical: 10,
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:
        headerTab === "tip" ? Colors.headerTabGrey : Colors.white,
      borderTopColor: Colors.signupBoxBorder,
      borderBottomColor:
        headerTab === "tip" ? Colors.primary : Colors.signupBoxBorder,
      borderBottomWidth: headerTab === "tip" ? 2 : 1,
    },
    campaignBox: {
      paddingVertical: 10,
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:
        headerTab === "campaign" ? Colors.headerTabGrey : Colors.white,
      borderBottomColor:
        headerTab === "campaign" ? Colors.primary : Colors.signupBoxBorder,
      borderBottomWidth: headerTab === "campaign" ? 2 : 1,
    },
    text: {
      color: Colors.black,
      fontFamily: "PlusJakartaSans-Medium",
      lineHeight: 28,
    },
  });
}

export default HeaderTab;
