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

export interface IPostDetail {
  id: number;
  type: string;
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
  comments: PostDetailComment[];
  imageUrls: string[];
  tagItems: string[];
}

type PostDetailComment = {
  id: number;
  post_id: number;
  user_id: number;
  username: string;
  content: string;
  profile_img: string;
  voteCount: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
