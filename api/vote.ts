import api from "./api";

interface UpdateVoteProps {
  token: string;
  postId: number;
  direction: "up" | "down";
}

export const updateVote = async ({
  token,
  postId,
  direction,
}: UpdateVoteProps) => {
  try {
    const res = await api.post(
      "/post/vote",
      { postId, direction },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
