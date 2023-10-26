import React from "react";
import { useRecoilState } from "recoil";
import { isAlertOpenAtom } from "@/state/atoms/alert";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TagItem from "./TagItem";
import FilterTag from "./FilterTag";
import { TAmenities } from "@/typings/resources";

interface TagListProps {
  tagChosen: TAmenities;
  setTagChosen: React.Dispatch<React.SetStateAction<TAmenities>>;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tags: TAmenities[];
}

const TagList: React.FC<TagListProps> = ({
  tagChosen,
  setTagChosen,
  setIsFilterOpen,
  tags,
}) => {
  const [isAlertOpen, setIsAlertOpen] = useRecoilState(isAlertOpenAtom);
  const styles = getStyles(isAlertOpen);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FilterTag setIsFilterOpen={setIsFilterOpen} />
        {tags?.map((item, idx) => {
          console.log("item", item);
          return (
            <TagItem
              key={idx}
              tagChosen={tagChosen}
              setTagChosen={setTagChosen}
              tag_name={item}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

function getStyles(isAlertOpen: boolean) {
  return StyleSheet.create({
    container: {
      position: "absolute",
      top: isAlertOpen ? 150 : 50,
      width: "100%",
      backgroundColor: "transparent", // Ensure it's transparent
    },
  });
}

export default TagList;
