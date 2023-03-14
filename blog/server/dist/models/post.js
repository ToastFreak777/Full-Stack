"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PostSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide a author for your post"],
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Post", PostSchema);
