import { StatusCodes } from "http-status-codes";

export type customError = {
  message: string;
  statusCode?: StatusCodes;
};

export default class CustomApiError extends Error implements customError {
  statusCode?: StatusCodes | undefined;

  constructor(message: string) {
    super(message);
  }
}
