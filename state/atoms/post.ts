import { atom } from "recoil";
import { IPost } from "@/typings/post";

export const postsAtom = atom<IPost[]>({
  key: "postsAtom",
  default: [],
});
