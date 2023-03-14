"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.deletePostById = exports.updatePostById = exports.getPostById = exports.getAllSingleUserPosts = exports.getAllUserPosts = void 0;
const http_status_codes_1 = require("http-status-codes");
const BadRequest_1 = __importDefault(require("../errors/BadRequest"));
const Unauthorized_1 = __importDefault(require("../errors/Unauthorized"));
const post_1 = __importDefault(require("../models/post"));
const user_1 = __importDefault(require("../models/user"));
const getAllUserPosts = async (req, res, next) => {
    const posts = await post_1.default.find()
        .populate({
        path: "author",
        select: "username avatar -_id",
    })
        .sort("-createdAt");
    res.status(http_status_codes_1.StatusCodes.OK).json({ posts, success: true });
};
exports.getAllUserPosts = getAllUserPosts;
const getAllSingleUserPosts = async (req, res, next) => {
    const { username } = req.params;
    const author = await user_1.default.findOne({ username })
        .populate({ path: "posts", options: { sort: "-createdAt" } })
        .lean();
    author.posts.forEach((post) => {
        delete post.author;
    });
    res
        .status(http_status_codes_1.StatusCodes.OK)
        .json({ posts: author.posts, avatar: author.avatar, success: true });
};
exports.getAllSingleUserPosts = getAllSingleUserPosts;
const getPostById = async (req, res, next) => {
    const { id: postId } = req.params;
    const post = await post_1.default.findOne({ _id: postId }).populate({
        path: "author",
        select: "username avatar -_id",
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({ post, success: true });
};
exports.getPostById = getPostById;
const updatePostById = async (req, res, next) => {
    const { params: { id: postId }, user: { userId }, } = req;
    const post = await post_1.default.findOneAndUpdate({ _id: postId, author: { _id: userId } }, req.body, {
        runValidators: true,
        new: true,
    });
    if (!post)
        throw new Unauthorized_1.default("You're not the owner of this post");
    res.status(http_status_codes_1.StatusCodes.OK).json({ post, success: true });
};
exports.updatePostById = updatePostById;
const deletePostById = async (req, res, next) => {
    const { params: { id: postId }, user: { userId }, } = req;
    const post = await post_1.default.findOneAndRemove({
        _id: postId,
        author: { _id: userId },
    });
    if (!post)
        throw new Unauthorized_1.default("You're not the owner of this post");
    res.status(http_status_codes_1.StatusCodes.OK).json({ post, success: true });
};
exports.deletePostById = deletePostById;
const createPost = async (req, res, next) => {
    const { user: { userId }, body: post, } = req;
    if (!post.title || !post.content)
        throw new BadRequest_1.default("Please provide all fields");
    post.author = userId;
    const newPost = await post_1.default.create(post);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ post: newPost, success: true });
};
exports.createPost = createPost;
