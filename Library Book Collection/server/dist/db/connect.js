import mongoose from "mongoose";
export default (url) => {
    return url && mongoose.connect(url);
};
