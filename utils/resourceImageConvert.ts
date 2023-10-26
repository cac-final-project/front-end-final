import { TAmenities } from "@/typings/resources";

const CampaignIcon = require("@/assets/images/resource/CampaignTag.png");
const BenchIcon = require("@/assets/images/resource/BenchTag.png");
const ShowerIcon = require("@/assets/images/resource/ShowerTag.png");
const ToiletIcon = require("@/assets/images/resource/ToiletTag.png");
const WaterIcon = require("@/assets/images/resource/WaterTag.png");

// this is for the tags (amenities (at the top))
export const resourceImageConvert = (tag: TAmenities) => {
  switch (tag) {
    case "bench":
      return BenchIcon;
    case "drinking_water":
      return WaterIcon;
    case "toilets":
      return ToiletIcon;
    case "shower":
      return ShowerIcon;
    default:
      return undefined;
  }
};

const CampaignItem = require("@/assets/images/resource/resourceItem/CampaignItem.png");
const ToiletItem = require("@/assets/images/resource/resourceItem/ToiletItem.png");
const WaterItem = require("@/assets/images/resource/resourceItem/WaterItem.png");
const BenchItem = require("@/assets/images/resource/resourceItem/BenchItem.png");
const ShowerItem = require("@/assets/images/resource/resourceItem/ShowerItem.png");

// this is for the bottomSheet
export const resourceItemConvert = (item: TAmenities) => {
  switch (item) {
    case "bench":
      return BenchItem;
    case "drinking_water":
      return WaterItem;
    case "toilets":
      return ToiletItem;
    case "shower":
      return ShowerItem;
    default:
      return undefined;
  }
};
