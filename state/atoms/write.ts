import { atom } from "recoil";
import { PostType } from "@/typings/heatLevels";

export const tagsAtom = atom<string[]>({
  key: "tagsAtom",
  default: [],
});

export const temporaryTagsAtom = atom<string[]>({
  key: "temporaryTagsAtom",
  default: [],
});

interface TipDataAtomProps {
  type: PostType;
  title: string;
  tags: string[];
  content: string;
  selectedImages: string[];
}

// tip
export const tipDataAtom = atom<TipDataAtomProps | null>({
  key: "tipDataAtom",
  default: null,
});
