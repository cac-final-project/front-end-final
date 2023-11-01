import { atom } from "recoil";
import { IPost, IPostDetail } from "@/typings/post";

export const postsAtom = atom<IPost[]>({
  key: "postsAtom",
  default: [],
});

export const postAtom = atom<IPostDetail | undefined>({
  key: "postAtom",
  default: undefined,
});
