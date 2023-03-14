import User from "../models/user";
import { StatusCodes } from "http-status-codes";
import "colors";
import BadRequest from "../errors/BadRequest";
import Unauthenticated from "../errors/Unauthorized";

export const createUser = async (req: any, res: any) => {
  const { username, email, password, confirm_password } = req.body;
  if (!username || !email || !password || !confirm_password)
    throw new BadRequest("Please fill in all fields");
  if (password !== confirm_password)
    throw new BadRequest("Passwords do not match");

  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ user: user._id, success: true });
};

export const loginUser = async (req: any, res: any) => {
  const { email, password } = req.body;

  if (!email || !password) throw new BadRequest("Please fill in all fields");

  const user = await User.findOne({ email });

  if (!user) throw new Unauthenticated("Invalid credentials");

  const passwordIsCorrect = await user.verifyToken(password);

  if (!passwordIsCorrect) throw new Unauthenticated("Invalid credentials");

  const token = user.generateToken();

  return res
    .status(StatusCodes.OK)
    .json({ token, username: user.username, success: true });
};

// export const updateUser = async (req: any, res: any) => {
//   if (!req.body) throw new BadRequest("No data provided to update user");

//   const usernameTaken = await User.findOne({ username: req.body.username });
//   if (usernameTaken) throw new Error("Username already exists");

//   const emailTaken = await User.findOne({ email: req.body.email });
//   if (emailTaken) throw new Error("Email already exists");

//   res.status(StatusCodes.OK);
// .json({ username: user.username, id: user._id, success: true });
// };
