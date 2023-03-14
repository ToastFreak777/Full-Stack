import { StatusCodes } from "http-status-codes";

export default (req: any, res: any) =>
  res.status(StatusCodes.NOT_FOUND).send("Route doesn't exist");
