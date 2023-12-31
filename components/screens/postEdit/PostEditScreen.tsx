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
import {
  selectedPlaceAtom,
  selectedPlaceLocationAtom,
} from "@/state/atoms/profileEdit";
import { locationAtom, neighborhoodAtom } from "@/state/atoms/location";
import { getPlacesApi } from "@/api/google";
import { PlacePrediction } from "@/typings/google";

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
  const [selectedPlace, setSelectedPlace] = useRecoilState(selectedPlaceAtom);
  console.log(selectedPlace);
  const [selectedPlaceLocation, setSelectedPlaceLocation] = useRecoilState(
    selectedPlaceLocationAtom
  );

  const location = useRecoilValue(locationAtom);
  const neighborhood = useRecoilValue(neighborhoodAtom);
  useEffect(() => {
    if (post_type === "campaign") {
      setAddress(selectedPlace?.description || "");
    } else {
      setAddress(neighborhood || "");
      setSelectedPlaceLocation({ lat: location?.lat!, lon: location?.lon! });
    }
  }, [post_type, selectedPlace]);

  // edit campaign (initial value)
  const findAndSetSelectedPlace = async () => {
    try {
      const res = await fetchPost({ postId: post_id!, token });
      const post = res.data as IPostDetail;
      const { title, content, tagItems, imageUrls, addressName, lat, lon } =
        post;
      setTitle(title);
      setTags(tagItems);
      setContent(content);
      setSelectedImages(imageUrls);
      setSelectedPlaceLocation({ lat: lat!, lon: lon! });
      const latitude = lat!;
      const longitude = lon!;
      const radius = 5000;
      const response = await getPlacesApi({
        query: addressName!,
        latitude,
        longitude,
        radius,
      });
      if (response.predictions && response.predictions.length > 0) {
        const firstPrediction = response.predictions[0] as PlacePrediction;
        setSelectedPlace(firstPrediction);
      } else {
        // Handle the case where no predictions are found
        console.log("No predictions found for the address.");
      }
    } catch (err) {}
  };

  // edit tip (initial value)
  const handleFetchPostApi = async () => {
    const res = await fetchPost({ postId: post_id!, token });
    const post = res.data as IPostDetail;
    const { title, content, tagItems, imageUrls, addressName, lat, lon } = post;
    setTitle(title);
    setTags(tagItems);
    setContent(content);
    setSelectedImages(imageUrls);
    setSelectedPlaceLocation({ lat: lat!, lon: lon! });
    setAddress(addressName ? addressName : "");
  };
  useEffect(() => {
    if (write_type === "edit" && post_type === "tip") {
      handleFetchPostApi();
    } else if (write_type === "edit" && post_type === "campaign") {
      findAndSetSelectedPlace();
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
