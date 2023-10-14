import { atom } from "recoil";

export const tagsAtom = atom<string[]>({
  key: "tagsAtom",
  default: [],
});
