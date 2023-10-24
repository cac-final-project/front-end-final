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
    if (file) {
      // Determine the file type based on the URI.
      const fileType = file.substring(file.lastIndexOf(".") + 1);

      // Extract the filename from the path
      const fileName = file.substring(file.lastIndexOf("/") + 1);

      formData.append("file", {
        uri: file,
        type: `image/${fileType}`,
        name: fileName,
      } as any);
    }
    if (bio) {
      formData.append("bio", bio);
    }
    const res = await api.put("/profile", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.isAxiosError) {
      console.error(
        axiosError.message,
        axiosError?.response?.data,
        axiosError?.response?.headers,
        axiosError.request
      );
    }
    return false;
  }
};
