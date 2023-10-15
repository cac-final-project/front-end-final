import React from "react";
import { useRecoilState } from "recoil";
import { isAlertOpenAtom } from "@/state/atoms/alert";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TagItem from "./TagItem";
import FilterTag from "./FilterTag";
import { TTagChosen } from "@/typings/heatLevels";

const FilterIcon = require("@/assets/images/resource/FilterTag.png");
const BenchIcon = require("@/assets/images/resource/BenchTag.png");
const CampaignIcon = require("@/assets/images/resource/CampaignTag.png");
const ShowerIcon = require("@/assets/images/resource/ShowerTag.png");
const ToiletIcon = require("@/assets/images/resource/ToiletTag.png");
const WaterIcon = require("@/assets/images/resource/WaterTag.png");

interface TagListProps {
  tagChosen: TTagChosen;
  setTagChosen: React.Dispatch<React.SetStateAction<TTagChosen>>;
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TagList: React.FC<TagListProps> = ({
  tagChosen,
  setTagChosen,
  setIsFilterOpen,
}) => {
  const [isAlertOpen, setIsAlertOpen] = useRecoilState(isAlertOpenAtom);
  const styles = getStyles(isAlertOpen);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FilterTag setIsFilterOpen={setIsFilterOpen} />
        <TagItem
          tagChosen={tagChosen}
          setTagChosen={setTagChosen}
          image_url={BenchIcon}
          tag_name="Campaign"
        />
        <TagItem
          tagChosen={tagChosen}
          setTagChosen={setTagChosen}
          image_url={CampaignIcon}
          tag_name="Water"
        />
        <TagItem
          tagChosen={tagChosen}
          setTagChosen={setTagChosen}
          image_url={ShowerIcon}
          tag_name="Public toilet"
        />
        <TagItem
          tagChosen={tagChosen}
          setTagChosen={setTagChosen}
          image_url={ToiletIcon}
          tag_name="Shower"
        />
        <TagItem
          tagChosen={tagChosen}
          setTagChosen={setTagChosen}
          image_url={WaterIcon}
          tag_name="Bench"
        />
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
