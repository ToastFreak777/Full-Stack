import axios from "axios";

import { PostType } from "../@types/Post";

const BASE_URL = "/api/v1/post";

export const newPost = async (post: PostType, userId: string) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userId}`,
      },
    };

    return (await axios.post(BASE_URL, post, config)).data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updatePost = async (
  post: PostType,
  userId: string,
  postId: string
) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userId}`,
      },
    };

    return (await axios.patch(`${BASE_URL}/${postId}`, post, config)).data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const deletePost = async (userId: string, postId: string) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userId}`,
      },
    };

    return (await axios.delete(`${BASE_URL}/${postId}`, config)).data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getAllPosts = async () => {
  try {
    return (await axios.get(BASE_URL)).data.posts;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllUserPosts = async (username: string) => {
  try {
    return (await axios.get(`${BASE_URL}/user/${username}`)).data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchPost = async (postId: string) => {
  try {
    return (await axios.get(`${BASE_URL}/${postId}`)).data.post;
  } catch (error) {
    console.log(error);
    return {};
  }
};
