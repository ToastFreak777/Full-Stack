import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";
export const createUser = async (req, res) => {
    const { username, password1, password2 } = req.body;
    if (!username || !password1 || !password2)
        throw new BadRequestError("Please fill in all fields");
    if (password1 !== password2)
        throw new BadRequestError("Passwords do not match!");
    const userExists = await User.findOne({ username });
    if (userExists)
        throw new UnauthenticatedError(`Username Already taken`);
    const user = await User.create({ username, password: password1 });
    // res.status(StatusCodes.CREATED).json({ user });
    res.status(StatusCodes.CREATED).redirect("/"); // redirect to login page
};
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        throw new BadRequestError("Please fill in all fields");
    const user = await User.findOne({ username });
    if (!user)
        throw new UnauthenticatedError("Invalid credentials");
    const isPassCorrect = await user.checkPassword(password);
    if (!isPassCorrect)
        throw new UnauthenticatedError("Invalid credentials");
    res.status(StatusCodes.OK).json({ username: user.username, id: user._id });
};
