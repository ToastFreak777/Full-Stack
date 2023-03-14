import { StatusCodes } from "http-status-codes";
import BadRequest from "../errors/BadRequest";
import unAuthorized from "../errors/Unauthorized";
import Post from "../models/post";
import User from "../models/user";
import { PostSchemaType } from "../@types/post";

export const getAllUserPosts = async (req: any, res: any, next: any) => {
  const posts = await Post.find()
    .populate({
      path: "author",
      select: "username avatar -_id",
    })
    .sort("-createdAt");

  res.status(StatusCodes.OK).json({ posts, success: true });
};

export const getAllSingleUserPosts = async (req: any, res: any, next: any) => {
  const { username } = req.params;

  const author = await User.findOne({ username })
    .populate({ path: "posts", options: { sort: "-createdAt" } })
    .lean();

  author.posts.forEach((post: any) => {
    delete post.author;
  });

  res
    .status(StatusCodes.OK)
    .json({ posts: author.posts, avatar: author.avatar, success: true });
};

export const getPostById = async (req: any, res: any, next: any) => {
  const { id: postId } = req.params;

  const post = await Post.findOne({ _id: postId }).populate({
    path: "author",
    select: "username avatar -_id",
  });

  res.status(StatusCodes.OK).json({ post, success: true });
};

export const updatePostById = async (req: any, res: any, next: any) => {
  const {
    params: { id: postId },
    user: { userId },
  } = req;

  const post = await Post.findOneAndUpdate(
    { _id: postId, author: { _id: userId } },
    req.body,
    {
      runValidators: true,
      new: true,
    }
  );

  if (!post) throw new unAuthorized("You're not the owner of this post");

  res.status(StatusCodes.OK).json({ post, success: true });
};
export const deletePostById = async (req: any, res: any, next: any) => {
  const {
    params: { id: postId },
    user: { userId },
  } = req;

  const post = await Post.findOneAndRemove({
    _id: postId,
    author: { _id: userId },
  });

  if (!post) throw new unAuthorized("You're not the owner of this post");

  res.status(StatusCodes.OK).json({ post, success: true });
};

export const createPost = async (req: any, res: any, next: any) => {
  const {
    user: { userId },
    body: post,
  } = req;

  if (!post.title || !post.content)
    throw new BadRequest("Please provide all fields");

  post.author = userId;

  const newPost = await Post.create(post);

  res.status(StatusCodes.CREATED).json({ post: newPost, success: true });
};
