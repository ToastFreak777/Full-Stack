import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserSchemaType } from "../@types/user";

const UserSchema = new mongoose.Schema<UserSchemaType>(
  {
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
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "author",
});

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.generateToken = function () {
  return jwt.sign(
    { userId: this._id, username: this.username },
    process.env.JWT_SECRET!,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

UserSchema.methods.verifyToken = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", UserSchema);
