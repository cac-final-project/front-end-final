import { atom } from "recoil";

export const isAlertOpenAtom = atom<boolean>({
  key: "isAlertOpenAtom",
  default: true,
});
