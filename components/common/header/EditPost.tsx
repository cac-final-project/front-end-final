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

interface EditPostProps {
  write_type: WriteType;
}

const EditPost: React.FC<EditPostProps> = ({ write_type }) => {
  const token = useRecoilValue(tokenAtom);
  const [tipData, setTipData] = useRecoilState(tipDataAtom);
  const setTags = useSetRecoilState(tagsAtom);
  const setTemporaryTags = useSetRecoilState(temporaryTagsAtom);
  console.log(tipData);

  const navigation = useNavigation<ScreenNavigationProp>();

  const handleEdit = async () => {
    if (tipData) {
      const res = await writeTip({ token: token!, ...tipData });
      setTags([]);
      setTemporaryTags([]);
      setTipData(null);
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
