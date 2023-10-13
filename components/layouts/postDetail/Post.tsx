import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";

const ProfileIcon = require("@/assets/images/Profile.png");
const UpVoteIcon = require("@/assets/images/UpVote.png");
const DownVoteIcon = require("@/assets/images/DownVote.png");
const ElipsisIcon = require("@/assets/images/elipsis.png");

interface PostProps {
  profile_img: string;
  post_id: number;
  isAuthor: boolean;
  onEllipsisPress: () => void; // New prop
}

const Post: React.FC<PostProps> = ({
  profile_img,
  isAuthor,
  post_id,
  onEllipsisPress,
}) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const handleProfileClick = () => {
    navigation.navigate("EditProfile");
  };
  return (
    <TouchableWithoutFeedback>
      <View style={styles.content}>
        <View style={styles.userSection}>
          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={handleProfileClick}>
              <View style={styles.userIcon}>
                {profile_img ? (
                  <Image
                    source={{
                      uri: "https://res.cloudinary.com/djehfg3yk/image/upload/v1696151625/file-upload/1696151623996-KakaoTalk_20230218_194526049_02_pedm6t.jpg",
                    }}
                    style={styles.profileImage}
                  />
                ) : (
                  <Image source={ProfileIcon} />
                )}
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity>
                <Text style={styles.username}>@JohnDoe</Text>
              </TouchableOpacity>
              {post_id === 0 && (
                <View style={styles.popularBadge}>
                  <Text style={styles.popularText}>Popular</Text>
                </View>
              )}
            </View>
          </View>
        </View>
        <View style={styles.postContent}>
          <View style={styles.postDetails}>
            <Text style={styles.postText}>
              We are distributing bottled water in the city!
            </Text>
            <Text style={styles.date}>2023.09.20</Text>
          </View>
          <View style={styles.voteContainer}>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image source={UpVoteIcon} style={styles.voteIcon} />
            </TouchableOpacity>
            <Text style={styles.voteCount}>28</Text>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image source={DownVoteIcon} style={styles.voteIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  ellipsis: {
    marginLeft: "auto",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  userSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "stretch",
  },
  userIcon: {
    width: 32,
    height: 32,
    backgroundColor: Colors.signupBoxBorder,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
    borderWidth: 1,
    borderColor: Colors.postBorder,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  username: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    lineHeight: 19.6,
    letterSpacing: 0.14,
  },
  popularBadge: {
    backgroundColor: Colors.popularTag,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 4,
  },
  popularText: {
    color: Colors.black,
    fontSize: 10,
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: 10,
    letterSpacing: 0.3,
  },
  postContent: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "flex-start",
    marginTop: 8,
  },
  postDetails: {
    flex: 1,
    flexDirection: "column",
    marginRight: 8,
  },
  postText: {
    flex: 1,
    color: Colors.black,
    fontSize: 18,
    fontFamily: "PlusJakartaSans-Bold",
    letterSpacing: 0.54,
  },
  date: {
    color: Colors.black,
    fontSize: 10,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.3,
    marginTop: 8,
    marginBottom: 10,
  },
  voteContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginTop: 4,
  },
  voteCount: {
    color: Colors.darkGrey,
    fontSize: 13,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.39,
    marginTop: 10,
    marginBottom: 12,
  },
  voteIcon: {
    // borderWidth: 1,
    // borderColor: "red",
  },
});

export default Post;
