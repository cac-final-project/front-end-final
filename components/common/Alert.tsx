import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isAlertOpenAtom } from "@/state/atoms/alert";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { Colors } from "@/constants/Colors";
import { countyAtom } from "@/state/atoms/location";
import { emergencyAtom } from "@/state/atoms/emergency";
import { getEmergencyApi } from "@/api/emergency";
import { getDayOfMonth, getFormattedTime, getMonthName } from "@/utils/index";

const CloseIcon = require("@/assets/images/Close.png");

const Alert: React.FC = () => {
  const county = useRecoilValue(countyAtom);
  const [emergency, setEmergency] = useRecoilState(emergencyAtom);

  const handleEmergencyApi = async () => {
    const res = await getEmergencyApi({ county: county! });
    if (res !== false) {
      setEmergency(res!);
    }
  };

  useEffect(() => {
    if (county) {
      handleEmergencyApi();
    }
  }, [county]);

  const navigation = useNavigation<ScreenNavigationProp>();

  const handleAlertClick = () => {
    navigation.navigate("Alert");
  };
  const [isAlertOpen, setIsAlertOpen] = useRecoilState(isAlertOpenAtom);

  const handleClose = () => {
    setIsAlertOpen(false);
  };

  const truncateString = (str: string) => {
    if (str.length > 50) {
      return str.slice(0, 50) + "...";
    } else {
      return str;
    }
  };

  if (emergency && isAlertOpen) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.alertHeader}>
          <View style={styles.alertContent}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>
                {getMonthName(emergency.properties.effective)}{" "}
                {getDayOfMonth(emergency.properties.effective)}
              </Text>
              <Text style={styles.timeText}>
                {getFormattedTime(emergency.properties.effective)}
              </Text>
            </View>
            <Text style={styles.alertText}>
              {truncateString(emergency.properties.headline)}
            </Text>
          </View>
          <TouchableOpacity onPress={handleClose} style={styles.closeContainer}>
            <Image source={CloseIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleAlertClick}
          style={styles.seeMoreContainer}
        >
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else {
    <></>;
  }
};

const styles = StyleSheet.create({
  container: {
    position: "absolute", // Set position to absolute
    top: 44, // Align to the top of the screen (you can adjust this)
    left: 0, // Align to the left of the screen (you can adjust this)
    right: 0, // Ensuring it stretches across the screen
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2000,
    zIndes: 2000,
  },
  alertHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  alertContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 10,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 4,
    gap: 8,
  },
  dateText: {
    color: Colors.black,
    fontSize: 8,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.8,
  },
  timeText: {
    color: Colors.black,
    fontSize: 8,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.8,
  },
  alertText: {
    color: Colors.black,
    fontSize: 12,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 1.2,
  },
  closeContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 16,
    height: 16,
  },
  seeMoreContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    paddingVertical: 8,
  },
  seeMoreText: {
    color: "#848484",
    fontSize: 12,
    fontFamily: "PlusJakartaSans-Regular",
    textDecorationLine: "underline",
    lineHeight: 18,
    letterSpacing: 1.2,
  },
});

export default Alert;
