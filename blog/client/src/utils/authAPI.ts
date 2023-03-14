import axios from "axios";
import { authenticatedUser, User } from "../@types/auth";

const BASE_URL = "/api/v1/auth";

export const loginUser = async (
  userData: Pick<User, "email" | "password">
): Promise<authenticatedUser | any> => {
  try {
    return (await axios.post(`${BASE_URL}/login`, userData)).data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const createUser = async (
  userData: User
): Promise<authenticatedUser | any> => {
  try {
    return (await axios.post(`${BASE_URL}/register`, userData)).data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};
