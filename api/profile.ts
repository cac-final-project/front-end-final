import api from "./api";
import { AxiosError } from "axios";

interface GetProfileInfoProps {
  token: string;
}

export const getProfileInfoApi = async ({ token }: GetProfileInfoProps) => {
  try {
    const res = await api.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

interface EditProfileApiProps {
  token: string;
  file?: any;
  bio?: string;
}

export const editProfileApi = async ({
  token,
  file,
  bio,
}: EditProfileApiProps) => {
  try {
    const formData = new FormData();
    console.log(file);
    if (bio) {
      formData.append("bio", bio);
    }
    if (file) {
      const fileType = file.match(/\.(jpeg|jpg|png|gif|bmp)$/i);
      const fileName = `image_${0}.${fileType ? fileType[1] : "jpg"}`;

      formData.append("files", {
        uri: file,
        type: `image/${fileType ? fileType[1] : "jpeg"}`,
        name: fileName,
      } as any);
    }

    const res = await api.post("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      console.error("API Error Response:", err.response.data);
    } else {
      console.error(err);
    }
    return false;
  }
};

interface GetAuthorProfileProps {
  author: string;
}

export const getAuthorProfile = async ({ author }: GetAuthorProfileProps) => {
  try {
    const res = await api.get(`/profile/author?author=${author}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
