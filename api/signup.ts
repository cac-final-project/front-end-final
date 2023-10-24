import api from "./api";
import { UserType } from "@/components/screens/signup/SignupScreen";

interface signupApiProps {
  type: UserType;
  nickname: string;
  username: string;
  password: string;
  phone_no: string;
}

export const signupApi = async (props: signupApiProps) => {
  try {
    const res = await api.post("/user", props);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

interface checkDupIdApiProps {
  username: string;
}

export const checkDupIdApi = async (props: checkDupIdApiProps) => {
  try {
    const res = await api.post("/user", props);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

interface checkPWApiProps {
  password: string;
}

export const checkPWApi = async (props: checkPWApiProps) => {
  try {
    const res = await api.post("/user", props);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

interface updatePWApiProps {
  password: string;
}

export const updatePWApi = async (props: updatePWApiProps) => {
  try {
    const res = await api.post("/user", props);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
