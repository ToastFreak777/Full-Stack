import mongoose from "mongoose";

export default (url: string | undefined) => {
  return url && mongoose.connect(url);
};
