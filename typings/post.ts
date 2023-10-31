import { PostType } from "@/typings/heatLevels";

export interface IPost {
  id: number;
  type: PostType;
  author: string;
  title: string;
  content: string;
  voteCount: number;
  lat: number | null;
  lon: number | null;
  addressName: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  isVoted: boolean | null;
  profile_img: string;
}
