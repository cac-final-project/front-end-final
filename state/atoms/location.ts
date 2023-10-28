import { atom } from "recoil";

interface LocationAtomType {
  lon: number;
  lat: number;
}

export const locationAtom = atom<LocationAtomType>({
  key: "locationAtom",
  default: { lat: 37.4219983, lon: -122.084 },
});

export const isLocationGrantedAtom = atom<boolean>({
  key: "isLocationGrantedAtom",
  default: false,
});
