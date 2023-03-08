import { StatusCodes } from "http-status-codes";

export default (err: any, req: any, res: any, next: any) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong try again later",
  };

  // Handle validation Errors
  if (err.name === "ValidationError") {
    customError = {
      statusCode: StatusCodes.BAD_REQUEST,
      msg: Object.values(err.errors)
        .map((error: any) => error.message)
        .join(", "),
    };
  }

  // Handle Cast Errors
  if (err.name === "CastError") {
    customError = {
      statusCode: StatusCodes.NOT_FOUND,
      msg: `No item found with id : ${err.value}`,
    };
  }

  if (err.code && err.code === 11000) {
    // Handle Duplicate Errors
    customError = {
      statusCode: StatusCodes.BAD_REQUEST,
      msg: `Duplicate value entered for ${Object.keys(
        err.keyValue
      )} field, please choose another value`,
    };
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};
