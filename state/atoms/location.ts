import { atom } from "recoil";

interface LocationAtomType {
  lon: number;
  lat: number;
}

export const locationAtom = atom<LocationAtomType | null>({
  key: "locationAtom",
  default: null,
});
