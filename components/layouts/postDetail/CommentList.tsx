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
import { IPostDetail } from "@/typings/post";
import { formatDate } from "@/utils/index";

const ProfileIcon = require("@/assets/images/Profile.png");

interface CommentListProps {
  post: IPostDetail;
}

const CommentList: React.FC<CommentListProps> = ({ post }) => {
  const { comments } = post;
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleProfileClick = () => {
    navigation.navigate("Profile");
  };
  return comments?.map((item) => (
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
                      uri: item.profile_img,
                    }}
                  />
                ) : (
                  <Image source={ProfileIcon} />
                )}
              </View>
            </TouchableOpacity>
            <Text style={styles.username}>@{item.username}</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.date}>{formatDate(item.createdAt)}</Text>
      </View>
      <Text style={styles.commentText}>{item.content}</Text>
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
