import { atom } from "recoil";
import { Level } from "@/typings/heatLevels";

interface WeatherInfoType {
  temp: number;
  level: Level;
}

export const weatherInfoAtom = atom<WeatherInfoType>({
  key: "weatherInfoAtom",
  default: { temp: 0, level: 1 },
});
