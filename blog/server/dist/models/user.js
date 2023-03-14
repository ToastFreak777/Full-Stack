"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        maxlength: 50,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email address"],
        unique: true,
    },
    avatar: {
        type: String,
        default: "default.jpg",
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
    },
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });
UserSchema.virtual("posts", {
    ref: "Post",
    localField: "_id",
    foreignField: "author",
});
UserSchema.pre("save", async function (next) {
    const salt = await bcryptjs_1.default.genSalt();
    this.password = await bcryptjs_1.default.hash(this.password, salt);
    next();
});
UserSchema.methods.generateToken = function () {
    return jsonwebtoken_1.default.sign({ userId: this._id, username: this.username }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
};
UserSchema.methods.verifyToken = async function (candidatePassword) {
    return await bcryptjs_1.default.compare(candidatePassword, this.password);
};
exports.default = mongoose_1.default.model("User", UserSchema);
