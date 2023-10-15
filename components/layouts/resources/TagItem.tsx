import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { TTagChosen } from "@/typings/heatLevels";

interface TagItemProps {
  image_url: number;
  tagChosen: TTagChosen;
  setTagChosen: React.Dispatch<React.SetStateAction<TTagChosen>>;
  tag_name: TTagChosen;
}

const TagItem: React.FC<TagItemProps> = ({
  image_url,
  tagChosen,
  setTagChosen,
  tag_name,
}) => {
  const styles = getStyles(tag_name, tagChosen);
  const handleClick = () => {
    if (tagChosen === tag_name) {
      setTagChosen(undefined);
    } else {
      setTagChosen(tag_name);
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <View style={styles.imageContainer}>
        <Image source={image_url} />
        <Text style={styles.text}>{tag_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

function getStyles(tag_name: TTagChosen, filterChosen: TTagChosen) {
  return StyleSheet.create({
    container: {
      marginRight: 8,
    },
    imageContainer: {
      backgroundColor:
        tag_name === filterChosen ? Colors.primary : Colors.white,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.16,
      shadowRadius: 4,
      elevation: 4,
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      padding: 8,
    },
    text: {
      marginLeft: 4,
      fontSize: 12,
      color: tag_name === filterChosen ? Colors.white : Colors.black,
      fontFamily: "PlusJakartaSans-Regular",
    },
  });
}

export default TagItem;
