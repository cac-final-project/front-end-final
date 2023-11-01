import React, { useState } from "react";
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
import { IPost } from "@/typings/post";
import { formatDate } from "@/utils";
import { updateVote } from "@/api/vote";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { isLoadingAtom } from "@/state/atoms/loading";
import { tokenAtom, isLoggedInAtom } from "@/state/atoms/login";
import { postsAtom } from "@/state/atoms/post";
import { fetchPosts } from "@/api/post";

const ProfileIcon = require("@/assets/images/Profile.png");
const UpVoteIcon = require("@/assets/images/UpVote.png");
const DownVoteIcon = require("@/assets/images/DownVote.png");
const ElipsisIcon = require("@/assets/images/elipsis.png");

interface PostProps {
  post_id: number;
  isAuthor: boolean;
  onEllipsisPress: (postId: number) => void;
  item: IPost;
}

const Post: React.FC<PostProps> = ({
  post_id,
  isAuthor,
  onEllipsisPress,
  item,
}) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const {
    profile_img,
    author,
    title,
    createdAt,
    voteCount,
    id,
    type,
    isVoted,
  } = item;

  const token = useRecoilValue(tokenAtom);
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  const setPosts = useSetRecoilState(postsAtom);
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  const handleEditClick = () => {
    navigation.navigate("PostDetail", { post_id: id, post_type: type });
  };
  const handleProfileClick = () => {
    navigation.navigate("EditProfile");
  };

  const handleVoteClick = async (
    e: GestureResponderEvent,
    vote: "up" | "down"
  ) => {
    if (!isLoggedIn) {
      return alert("You must be logged in!");
    }
    e.stopPropagation();
    if (isVoted === vote) {
      alert("You have voted already!");
      return;
    }
    // let newVoteCount = voteCount;
    // if (isVoted === vote) {
    //   alert("You have voted already!");
    //   return;
    // } else if (!isVoted) {
    //   newVoteCount = vote === "up" ? voteCount + 1 : voteCount - 1;
    // } else if (isVoted === "up" && vote === "down") {
    //   newVoteCount = voteCount - 2;
    // } else if (isVoted === "down" && vote === "up") {
    //   newVoteCount = voteCount + 2;
    // }
    // setVoteCountState(newVoteCount);
    // setIsVotedState(vote);
    setIsLoading(true);
    const res = await updateVote({
      postId: id,
      token: token!,
      direction: vote,
    });
    const resPosts = await fetchPosts({
      page: 1,
      limit: 10,
      type: type,
      token,
    });
    setPosts(resPosts.data);
    setIsLoading(false);
  };
  return (
    <TouchableWithoutFeedback onPress={handleEditClick}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.userSection}>
            <View style={styles.profileContainer}>
              <TouchableOpacity onPress={handleProfileClick}>
                <View style={styles.userIcon}>
                  {profile_img ? (
                    <Image
                      source={{
                        uri: profile_img,
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
                  <Text style={styles.username}>@{author}</Text>
                </TouchableOpacity>
                {post_id === 0 && (
                  <View style={styles.popularBadge}>
                    <Text style={styles.popularText}>Popular</Text>
                  </View>
                )}
              </View>
            </View>
            {isAuthor && (
              <TouchableOpacity
                onPress={() => onEllipsisPress(id)}
                style={styles.ellipsis}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Image source={ElipsisIcon} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.postContent}>
            <View style={styles.postDetails}>
              <Text style={styles.postText}>{title}</Text>
              <Text style={styles.date}>{formatDate(createdAt)}</Text>
            </View>
            <View style={styles.voteContainer}>
              <TouchableOpacity
                onPress={(e) => handleVoteClick(e, "up")}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              >
                <Image source={UpVoteIcon} style={styles.voteIcon} />
              </TouchableOpacity>
              <Text style={styles.voteCount}>{voteCount}</Text>
              <TouchableOpacity
                onPress={(e) => handleVoteClick(e, "down")}
                hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }}
              >
                <Image source={DownVoteIcon} style={styles.voteIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.signupBoxBorder,
    marginBottom: 16,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: 19.5,
    letterSpacing: 0.3,
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
