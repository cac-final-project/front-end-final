import { atom } from "recoil";
import { PlacePrediction } from "@/typings/google";

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

// campaign
export const selectedPlaceAtom = atom<PlacePrediction | null>({
  key: "selectedPlaceAtom",
  default: null,
});

interface ISelectedPlaceLocation {
  lat: number;
  lon: number;
}

export const selectedPlaceLocationAtom = atom<ISelectedPlaceLocation | null>({
  key: "selectedPlaceLocationAtom",
  default: null,
});
