import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";

const ProfileIcon = require("@/assets/images/Profile.png");

const CommentList: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleProfileClick = () => {
    navigation.navigate("Profile");
  };
  return [
    {
      id: 0,
      profile_img:
        "https://res.cloudinary.com/djehfg3yk/image/upload/v1696151625/file-upload/1696151623996-KakaoTalk_20230218_194526049_02_pedm6t.jpg",
    },
    { id: 1, profile_img: "" },
    ,
    { id: 2, profile_img: "" },
    ,
    { id: 3, profile_img: "" },
  ]?.map((item) => (
    <View key={item?.id} style={styles.commentBox}>
      <View style={styles.headerArea}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.profileArea}>
            <TouchableOpacity onPress={handleProfileClick}>
              <View style={styles.profilePictureContainer}>
                {item?.profile_img ? (
                  <Image
                    style={styles.profilePlaceholder}
                    source={{
                      uri: item.profile_img /*profile picture URI here*/,
                    }}
                  />
                ) : (
                  <Image source={ProfileIcon} />
                )}
              </View>
            </TouchableOpacity>
            <Text style={styles.username}>@JohnDoe</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.date}>2023.09.20</Text>
      </View>
      <Text style={styles.commentText}>
        Lorem ipsum dolor sit amet consectetur. Sag it tis sit massa id
        duis.Lorem ipsum dolor sit amet consectetur. Sag it tis sit massa id
        duis.Lorem ipsum dolor sit amet consectetur. Sag it tis sit massa id
        duis.Lorem ipsum dolor sit amet consectetur. Sag it tis sit massa id
        duis.Lorem ipsum dolor sit amet consectetur. Sag it tis sit massa id
        duis.Lorem ipsum dolor sit amet consectetur. Sag it tis sit massa id
        duis.
      </Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  commentBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  profileArea: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 4,
  },
  profilePictureContainer: {
    width: 32,
    height: 32,
    backgroundColor: "#E3E3E3",
    borderRadius: 8,
    marginRight: 8,
    position: "relative",
  },
  profilePlaceholder: {
    width: 32,
    height: 32,
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
  },
  userIcon: {
    fontSize: 20,
    color: "#171717",
    textAlign: "center",
    width: "100%",
    lineHeight: 32, // This should vertically center the icon
  },
  username: {
    color: "#171717",
    fontSize: 14,
    fontWeight: "400",
  },
  headerArea: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center", // This will center-align the children vertically
    marginBottom: 4,
    width: "100%", // This will allow the headerArea to take up the full width
  },
  date: {
    color: "#171717",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0.3,
    marginLeft: "auto", // This will push the date to the right
  },
  commentText: {
    color: "#171717",
    fontSize: 13,
    fontWeight: "400",
    letterSpacing: 0.39,
  },
});

export default CommentList;
