import mongoose from "mongoose";

export interface PostSchemaType {
  title: string;
  content: string;
  author: {
    type: typeof mongoose.Types.ObjectId;
    ref: string;
    required: [true, string];
  };
}
