import mongoose from "mongoose";
import { PostSchemaType } from "../@types/post";

const PostSchema = new mongoose.Schema<PostSchemaType>(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for your post"],
      maxlength: 100,
    },
    content: {
      type: String,
      required: [true, "Please provide a content for your post"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a author for your post"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
