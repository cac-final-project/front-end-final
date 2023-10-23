import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "@/constants/Colors";

const UserIcon = require("@/assets/images/UserSignUp.png");
const VolunteerIcon = require("@/assets/images/VolunteerSignup.png");

type UserType = "neighbor" | "volunteer";
type UserTypeState = "" | UserType;

interface WelcomeBoxProps {
  title: UserType;
  userType: UserTypeState;
  handleMoveProgress: () => void;
  handleSetUserType: (userType: UserTypeState) => void;
}

const WelcomeBox: React.FC<WelcomeBoxProps> = ({
  title,
  userType,
  handleMoveProgress,
  handleSetUserType,
}) => {
  const styles = getStyles(userType, title);

  return (
    <TouchableOpacity onPress={() => handleSetUserType(title)}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.iconContainer}>
              <Image source={UserIcon} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.header}>
                {title === "neighbor" ? "Neighbors" : "Volunteers"}
              </Text>
              {title === "neighbor" ? (
                <Text style={styles.description}>
                  Share heat-specific tips{"\n"}
                  Engage with community{"\n"}
                  Discover local cooling resources{"\n"}
                  Stay updated with heat alerts
                </Text>
              ) : (
                <Text style={styles.description}>
                  Launch heat-relief campaigns {"\n"}
                  Collaborate with fellow volunteers {"\n"}
                  Extend a hand during emergencies
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function getStyles(userType: UserTypeState, title: UserType) {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: 24,
      marginBottom: 16,
    },
    container: {
      padding: 24,
      backgroundColor: userType === title ? Colors.headerTabGrey : Colors.white,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: userType === title ? Colors.primary : Colors.signupBoxBorder,
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    innerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    iconContainer: {
      width: 80,
      height: 80,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
    },
    textContainer: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    header: {
      color: Colors.primary,
      fontSize: 26,
      fontFamily: "PlusJakartaSans-Bold",
      letterSpacing: 0.78,
    },
    description: {
      color: "#171717",
      fontSize: 10,
      fontFamily: "PlusJakartaSans-Regular",
      lineHeight: 16,
      letterSpacing: 0.3,
    },
  });
}

export default WelcomeBox;
