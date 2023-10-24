import api from "./api";

interface loginApiProps {
  username: string;
  password: string;
}

export const loginApi = async (props: loginApiProps) => {
  try {
    const res = await api.post("/user/login", props);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
