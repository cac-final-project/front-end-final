import { atom } from "recoil";

export const isUsernameNotValidAtom = atom<boolean>({
  key: "isUsernameNotValidAtom",
  default: false,
});

export const smsCodeAtom = atom<number[] | null>({
  key: "smsCodeAtom",
  default: null,
});

export const isSmsCodeNotValidAtom = atom<boolean>({
  key: "isSmsCodeNotValidAtom",
  default: false,
});
