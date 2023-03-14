import express from "express";
import { getUserById, updateUserById } from "../controllers/user";
const router = express.Router();

import upload from "../middleware/imageUploader";
import imageResizer from "../middleware/imageResizer";

router
  .route("/")
  .get(getUserById)
  .patch(upload.single("avatar"), imageResizer, updateUserById);

export default router;
