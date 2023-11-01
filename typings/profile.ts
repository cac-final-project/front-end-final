export interface UserProfile {
  id: number;
  username: string;
  nickname: string;
  password: string;
  phone_no: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface OtherProfile {
  id: number;
  user_id: number;
  profile_img: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  username: string;
  user: UserProfile;
}
