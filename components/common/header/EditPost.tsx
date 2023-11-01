import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { WriteType } from "@/typings/heatLevels";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import {
  tagsAtom,
  tipDataAtom,
  editTitleAtom,
  editContentAtom,
  editselectedImagesAtom,
  editaddressNameAtom,
  temporaryTagsAtom,
} from "@/state/atoms/write";
import { tokenAtom } from "@/state/atoms/login";
import { writeTip, editPost } from "@/api/post";
import { isLoadingAtom } from "@/state/atoms/loading";
import { postsAtom, postAtom } from "@/state/atoms/post";
import { fetchPosts, fetchPost } from "@/api/post";
import { useRoute } from "@react-navigation/native";
import { RouteNames } from "@/typings/StackParam";
import { PostType } from "@/typings/heatLevels";

interface EditPostProps {
  write_type: WriteType;
}

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    post_id?: number;
    post_type: PostType;
    write_type: WriteType;
  };
};

const EditPost: React.FC<EditPostProps> = ({ write_type }) => {
  const route = useRoute<RouteType>();
  const {
    params: { post_id, post_type },
  } = route;
  const navigation = useNavigation<ScreenNavigationProp>();

  const setIsLoading = useSetRecoilState(isLoadingAtom);
  const token = useRecoilValue(tokenAtom);
  const [title, setTitle] = useRecoilState(editTitleAtom);
  const [tags, setTags] = useRecoilState(tagsAtom);
  const [content, setContent] = useRecoilState(editContentAtom);
  const [selectedImages, setSelectedImages] = useRecoilState(
    editselectedImagesAtom
  );
  const [addressName, setAddress] = useRecoilState(editaddressNameAtom);
  const setTemporaryTags = useSetRecoilState(temporaryTagsAtom);
  const setPosts = useSetRecoilState(postsAtom);
  const setPost = useSetRecoilState(postAtom);

  const handleEdit = async () => {
    const tipData = {
      type: post_type,
      title,
      tags,
      content,
      selectedImages,
      post_id: String(post_id),
      addressName,
    };
    if (write_type === "write") {
      if (tipData) {
        setIsLoading(true);
        await writeTip({ token: token!, ...tipData });
        const resPosts = await fetchPosts({
          page: 1,
          limit: 10,
          type: tipData.type,
        });
        setPosts(resPosts.data);
        setTitle("");
        setContent("");
        setAddress("");
        setSelectedImages([]);
        setTags([]);
        setTemporaryTags([]);
        setIsLoading(false);
        navigation.goBack();
      }
    } else {
      if (tipData) {
        setIsLoading(true);
        await editPost({ token: token!, ...tipData });
        const resPosts = await fetchPosts({
          page: 1,
          limit: 10,
          type: tipData.type,
        });
        setPosts(resPosts.data);
        const resPost = await fetchPost({
          token,
          postId: Number(tipData.post_id),
        });
        setPost(resPost.data);
        setTitle("");
        setContent("");
        setSelectedImages([]);
        setTags([]);
        setTemporaryTags([]);
        setIsLoading(false);
        navigation.goBack();
      }
    }
  };

  return (
    <TouchableOpacity
      onPress={handleEdit}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text style={styles.contentText}>
        {write_type === "edit" ? "Edit" : "Post"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentText: {
    color: Colors.primary,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Bold",
    marginRight: 16,
  },
});

export default EditPost;
