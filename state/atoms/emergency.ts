import { atom } from "recoil";
import { IAlert } from "@/typings/emergency";

export const emergencyAtom = atom<IAlert | null>({
  key: "emergencyAtom",
  default: null,
});
