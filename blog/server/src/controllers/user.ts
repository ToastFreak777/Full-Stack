import { StatusCodes } from "http-status-codes";
import BadRequest from "../errors/BadRequest";
import User from "../models/user";

export const updateUserById = async (req: any, res: any) => {
  if (!req.body) throw new BadRequest("No data provided to update");

  console.log(req.file);
  console.log(req.body);

  const user = await User.findByIdAndUpdate(
    req.user.userId,
    { ...req.body, avatar: req.file.filename },
    {
      runValidators: true,
      new: true,
    }
  ).select("-_id -password -__v");

  res.status(StatusCodes.OK).json(user);
};

export const getUserById = async (req: any, res: any) => {
  const user = await User.findById(req.user.userId).select("-password -__v");

  res.status(StatusCodes.OK).json(user);
};
