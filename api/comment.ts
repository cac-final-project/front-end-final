import api from "./api";

interface WriteCommentApiProps {
  token: string;
  postId: number;
  content: string;
}

export const writeCommentApi = async ({
  token,
  postId,
  content,
}: WriteCommentApiProps) => {
  try {
    const res = await api.post(
      "/comment",
      { postId, content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
