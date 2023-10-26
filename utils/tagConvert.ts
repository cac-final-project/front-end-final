import { TAmenities } from "@/typings/resources";
import { TTagChosen } from "@/typings/heatLevels";

export const tagConvert = (amenity: TAmenities): TTagChosen => {
  switch (amenity) {
    case "bench":
      return "Bench";
    case "drinking_water":
      return "Water";
    case "toilets":
      return "Public toilet";
    case "shower":
      return "Shower";
  }
};
