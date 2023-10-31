import { atom } from "recoil";

interface EditProfileApiProps {
  file?: any;
  bio?: string;
}

export const editProfileAtom = atom<EditProfileApiProps>({
  key: "editProfileAtom",
  default: {},
});

export interface IProfile {
  bio?: string;
  profile_img?: string | null;
  posts: [];
}

export const profileAtom = atom<IProfile>({
  key: "profileAtom",
  default: { posts: [] },
});
