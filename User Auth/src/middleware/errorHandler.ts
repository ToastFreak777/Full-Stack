import { CustomApiError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

export default (err: any, req: any, res: any, next: any) => {
  console.log("working");
  if (err instanceof CustomApiError)
    return res.status(err.statusCode).json({ message: err.message });

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Something went wrong try again later");
};
