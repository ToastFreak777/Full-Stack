import { StatusCodes } from "http-status-codes";
import { CustomErrorType } from "../@types/erros";
import CustomApiError from "./CustomApiError";

export default class Unauthenticated
  extends CustomApiError
  implements CustomErrorType
{
  statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
