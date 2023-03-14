import express from "express";
import {
  createPost,
  deletePostById,
  getAllSingleUserPosts,
  getAllUserPosts,
  getPostById,
  updatePostById,
} from "../controllers/post";
import authentication from "../middleware/authentication";
const router = express.Router();

router.route("/").get(getAllUserPosts).post(authentication, createPost);

router.get("/user/:username", getAllSingleUserPosts);

router
  .route("/:id")
  .get(getPostById)
  .patch(authentication, updatePostById)
  .delete(authentication, deletePostById);

export default router;
