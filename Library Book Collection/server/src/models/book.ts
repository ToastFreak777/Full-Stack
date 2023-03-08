import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Provide A Book Title"],
    },
    author: {
      type: String,
      required: [true, "Please Provide A Book Author"],
    },
    price: {
      type: Number,
      required: [true, "Please Provide A Book Price"],
    },
    genre: {
      type: String,
      default: "N/A",
    },
    date_published: {
      type: Date,
      required: [true, "Please Provide A Publication Date"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
