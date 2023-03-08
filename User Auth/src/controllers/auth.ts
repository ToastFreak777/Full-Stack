import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";

export type UserData = {
  username: string;
  password1: string;
  password2: string;
  term: string;
};

export type User = {
  _id: string;
  username: string;
  password?: string;
  __v: number;
  checkPassword: (password: string) => {};
};

export const createUser = async (req: any, res: any): Promise<void> => {
  const { username, password1, password2 }: UserData = req.body;

  if (!username || !password1 || !password2)
    throw new BadRequestError("Please fill in all fields");

  if (password1 !== password2)
    throw new BadRequestError("Passwords do not match!");

  const userExists = await User.findOne({ username });
  if (userExists) throw new UnauthenticatedError(`Username Already taken`);

  const user = await User.create({ username, password: password1 });
  // res.status(StatusCodes.CREATED).json({ user });
  res.status(StatusCodes.CREATED).redirect("/"); // redirect to login page
};

export const loginUser = async (req: any, res: any): Promise<void> => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new BadRequestError("Please fill in all fields");

  const user: User | null = await User.findOne({ username });

  if (!user) throw new UnauthenticatedError("Invalid credentials");

  const isPassCorrect = await user.checkPassword(password);

  if (!isPassCorrect) throw new UnauthenticatedError("Invalid credentials");

  res.status(StatusCodes.OK).json({ username: user.username, id: user._id });
};
