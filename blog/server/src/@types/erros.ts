import { StatusCodes } from "http-status-codes";

export type CustomErrorType = {
  message: string;
  statusCode: StatusCodes;
};
