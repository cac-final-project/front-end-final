import api from "./api";

export const fetchTags = async () => {
  try {
    const res = await api.get("/post/tags");
    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
