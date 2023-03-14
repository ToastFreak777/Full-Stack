import axios from "axios";
import { User } from "../@types/auth";

const BASE_URL = "/api/v1/user";

export const updateUserInfo = async (
  userData: Pick<User, "username" | "email" | "avatar">,
  userId: string
) => {
  try {
    const formData = new FormData();
    formData.append("username", userData.username);
    formData.append("email", userData.email);
    formData.append("avatar", userData.avatar);

    const config = {
      headers: {
        Authorization: `Bearer ${userId}`,
      },
    };

    return (await axios.patch(BASE_URL, formData, config)).data;
  } catch (error: any) {
    return error;
  }
};

export const getUserInfo = async (userId: string) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userId}`,
      },
    };

    return (await axios.get(BASE_URL, config)).data;
  } catch (error) {
    console.log(error);
  }
};
