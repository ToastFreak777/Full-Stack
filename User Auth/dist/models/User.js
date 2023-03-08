import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
        maxlength: 50,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
    },
});
UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
UserSchema.methods.checkPassword = async function (candidatePass) {
    return await bcrypt.compare(candidatePass, this.password);
};
const model = mongoose.model("User", UserSchema);
export default model;
