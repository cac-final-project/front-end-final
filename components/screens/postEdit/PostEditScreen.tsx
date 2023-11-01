import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useRoute } from "@react-navigation/native";
import { RouteNames } from "@/typings/StackParam";
import { PostType, WriteType } from "@/typings/heatLevels";
import * as ImagePicker from "expo-image-picker";
import {
  InputTitle,
  TagList,
  Location,
  ContentInput,
  StickyMenu,
  ImageList,
} from "@/components/layouts/postEdit/index";
import {
  tagsAtom,
  tipDataAtom,
  editTitleAtom,
  editContentAtom,
  editselectedImagesAtom,
  editaddressNameAtom,
} from "@/state/atoms/write";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { fetchPost } from "@/api/post";
import { tokenAtom } from "@/state/atoms/login";
import { IPostDetail } from "@/typings/post";

type RouteType = {
  key: string;
  name: RouteNames;
  params: {
    post_id?: number;
    post_type: PostType;
    write_type: WriteType;
  };
};

const PostEditScreen: React.FC = () => {
  const token = useRecoilValue(tokenAtom);
  const route = useRoute<RouteType>();
  const {
    params: { post_id, post_type, write_type },
  } = route;

  // 1. title
  const [title, setTitle] = useRecoilState(editTitleAtom);

  // 2. tags
  const [tags, setTags] = useRecoilState(tagsAtom);

  // 3 contents
  const [content, setContent] = useRecoilState(editContentAtom);

  // 4 images (max two)
  const [selectedImages, setSelectedImages] = useRecoilState(
    editselectedImagesAtom
  );

  const pickImage = async () => {
    if (selectedImages.length >= 2) {
      alert("Maximum of two images only!");
      return;
    }

    let result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

    // Using optional chaining and type assertion
    if (!result.canceled && result.assets?.length > 0) {
      setSelectedImages((prevImages) => [
        ...prevImages,
        (result.assets as ImagePicker.ImagePickerAsset[])[0].uri,
      ]);
    }
  };

  // location for campaign

  const [addressName, setAddress] = useRecoilState(editaddressNameAtom);

  // for edit
  const handleFetchPostApi = async () => {
    const res = await fetchPost({ postId: post_id!, token });
    const post = res.data as IPostDetail;
    const { title, content, tagItems, imageUrls, addressName } = post;
    setTitle(title);
    setTags(tagItems);
    setContent(content);
    setSelectedImages(imageUrls);
    setAddress(addressName ? addressName : "");
  };
  useEffect(() => {
    if (write_type === "edit") {
      handleFetchPostApi();
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.inputContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <InputTitle title={title} onChange={setTitle} />
            <TagList tags={tags} />
            <Location addressName={addressName} />
            <View style={styles.line}></View>
            <ContentInput content={content} onChange={setContent} />
          </View>
        </TouchableWithoutFeedback>
        <ImageList
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      </ScrollView>
      <StickyMenu pickImage={pickImage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inputContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    marginBottom: 58,
  },
  line: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: Colors.signupBoxBorder,
    marginBottom: 16,
  },
});

export default PostEditScreen;
