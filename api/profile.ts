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
    if (file) {
      const fileType = file.match(/\.(jpeg|jpg|png|gif|bmp)$/i);
      // Using a default file name in case the original name isn't available
      const fileName = `profile_picture.${fileType ? fileType[1] : "jpg"}`;

      formData.append("file", {
        uri: file,
        type: `image/${fileType ? fileType[1] : "jpeg"}`,
        name: fileName,
      } as any);
    }
    if (bio) {
      formData.append("bio", bio);
    }

    const res = await api.post("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
