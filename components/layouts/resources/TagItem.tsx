import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { TAmenities } from "@/typings/resources";
import { tagConvert, resourceImageConvert } from "@/utils/index";

interface TagItemProps {
  tagChosen: TAmenities;
  setTagChosen: React.Dispatch<React.SetStateAction<TAmenities>>;
  tag_name: TAmenities;
  setFilterChosen: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagItem: React.FC<TagItemProps> = ({
  tagChosen,
  setTagChosen,
  tag_name,
  setFilterChosen,
}) => {
  const styles = getStyles(tag_name, tagChosen);
  const handleClick = () => {
    if (tagChosen === tag_name) {
      setTagChosen(undefined);
      setFilterChosen([]);
    } else {
      setTagChosen(tag_name);
      setFilterChosen([]);
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <View style={styles.imageContainer}>
        <Image source={resourceImageConvert(tag_name)} />
        <Text style={styles.text}>{tagConvert(tag_name)}</Text>
      </View>
    </TouchableOpacity>
  );
};

function getStyles(tag_name: TAmenities, filterChosen: TAmenities) {
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
