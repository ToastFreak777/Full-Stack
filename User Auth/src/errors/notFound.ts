import { StatusCodes } from "http-status-codes";
import CustomApiError, { customError } from "./CustomAPIError.js";

export default class NotFoundError
  extends CustomApiError
  implements customError
{
  statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
