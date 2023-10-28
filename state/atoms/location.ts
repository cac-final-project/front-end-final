import { atom } from "recoil";

interface LocationAtomType {
  lon: number;
  lat: number;
}

export const locationAtom = atom<LocationAtomType | null>({
  key: "locationAtom",
  default: null,
});

export const neighborhoodAtom = atom<string | null>({
  key: "neighborhoodAtom",
  default: null,
});

export const countyAtom = atom<string | null>({
  key: "countyAtom",
  default: null,
});
