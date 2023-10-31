import api from "./api";
import { PostType } from "@/typings/heatLevels";

interface WriteTipProps {
  token: string;
  type: PostType;
  title: string;
  tags: string[];
  content: string;
  selectedImages: string[];
}

export const writeTip = async ({
  token,
  type,
  title,
  tags,
  content,
  selectedImages,
}: WriteTipProps) => {
  try {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("title", title);
    formData.append("tags", tags.join(", "));
    formData.append("content", content);

    selectedImages.forEach((image, index) => {
      const fileType = image.match(/\.(jpeg|jpg|png|gif|bmp)$/i);
      const fileName = `image_${index}.${fileType ? fileType[1] : "jpg"}`;

      formData.append("files", {
        uri: image,
        type: `image/${fileType ? fileType[1] : "jpeg"}`,
        name: fileName,
      } as any);
    });

    // Make the POST request
    const res = await api.post("/post", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    console.error(err);
    return false;
  }
};

interface FetchPostsProps {
  page: number;
  limit: number;
  type: PostType;
}

export const fetchPosts = async ({ page, limit, type }: FetchPostsProps) => {
  try {
    const res = await api.get(`/post?page=${page}&limit=${limit}&type=${type}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
