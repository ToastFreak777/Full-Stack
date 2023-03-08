import { StatusCodes } from "http-status-codes";
import CustomApiError from "./CustomAPIError.js";
export default class BadRequest extends CustomApiError {
    statusCode;
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}
