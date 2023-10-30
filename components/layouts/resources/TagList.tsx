import React from "react";
import { useRecoilState } from "recoil";
import { isAlertOpenAtom } from "@/state/atoms/alert";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TagItem from "./TagItem";
import FilterTag from "./FilterTag";
import { TAmenities } from "@/typings/resources";
import { useRecoilValue } from "recoil";
import { emergencyAtom } from "@/state/atoms/emergency";
import { IAlert } from "@/typings/emergency";

interface TagListProps {
  tagChosen: TAmenities;
  setTagChosen: React.Dispatch<React.SetStateAction<TAmenities>>;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tags: TAmenities[];
  setFilterChosen: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagList: React.FC<TagListProps> = ({
  tagChosen,
  setTagChosen,
  setIsFilterOpen,
  tags,
  setFilterChosen,
}) => {
  const [isAlertOpen, setIsAlertOpen] = useRecoilState(isAlertOpenAtom);
  const emergencyData = useRecoilValue(emergencyAtom);
  const styles = getStyles(isAlertOpen, emergencyData);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FilterTag setIsFilterOpen={setIsFilterOpen} />
        {tags.length !== 0 &&
          tags.map((item, idx) => {
            return (
              <TagItem
                key={idx}
                tagChosen={tagChosen}
                setTagChosen={setTagChosen}
                tag_name={item}
                setFilterChosen={setFilterChosen}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

function getStyles(isAlertOpen: boolean, emergencyData: IAlert | null) {
  return StyleSheet.create({
    container: {
      position: "absolute",
      top: emergencyData && isAlertOpen ? 150 : 50,
      width: "100%",
      backgroundColor: "transparent", // Ensure it's transparent
    },
  });
}

export default TagList;
