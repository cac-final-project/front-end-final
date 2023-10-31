import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/typings/StackParam";
import { WriteType } from "@/typings/heatLevels";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { tipDataAtom, tagsAtom, temporaryTagsAtom } from "@/state/atoms/write";
import { tokenAtom } from "@/state/atoms/login";
import { writeTip } from "@/api/post";
import { isLoadingAtom } from "@/state/atoms/loading";
import { postsAtom } from "@/state/atoms/post";
import { fetchPosts } from "@/api/post";

interface EditPostProps {
  write_type: WriteType;
}

const EditPost: React.FC<EditPostProps> = ({ write_type }) => {
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  const token = useRecoilValue(tokenAtom);
  const [tipData, setTipData] = useRecoilState(tipDataAtom);
  const setTags = useSetRecoilState(tagsAtom);
  const setTemporaryTags = useSetRecoilState(temporaryTagsAtom);
  const setPosts = useSetRecoilState(postsAtom);

  const navigation = useNavigation<ScreenNavigationProp>();

  const handleEdit = async () => {
    if (tipData) {
      setIsLoading(true);
      await writeTip({ token: token!, ...tipData });
      const resPosts = await fetchPosts({
        page: 1,
        limit: 10,
        type: tipData.type,
      });
      setPosts(resPosts.data);
      setTags([]);
      setTemporaryTags([]);
      setTipData(null);
      setIsLoading(false);
      navigation.goBack();
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
