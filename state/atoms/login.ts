import { atom } from "recoil";
import { userType } from "@/typings/heatLevels";

export const tokenAtom = atom<string | null>({
  key: "tokenAtom",
  default: null,
});

export const isLoggedInAtom = atom<boolean>({
  key: "isLoggedInAtom",
  default: false,
});

interface LoginInfoType {
  username: string;
  nickname: string;
  type: userType;
  phone_no: string;
}

export const loginInfoAtom = atom<LoginInfoType>({
  key: "loginInfoAtom",
  default: { username: "", nickname: "", type: "", phone_no: "" },
});
