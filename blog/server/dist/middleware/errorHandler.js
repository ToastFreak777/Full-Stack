"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
exports.default = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong on our end please come back later",
    };
    // Handle validation Errors
    if (err.name === "ValidationError") {
        customError = {
            statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
            msg: Object.values(err.errors)
                .map((error) => err.message)
                .join(", "),
        };
    }
    // Handle Cast Errors
    if (err.name === "CastError") {
        customError = {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            msg: `No item found with id : ${err.value}`,
        };
    }
    if (err.code && err.code === 11000) {
        // Handle Duplicate Errors
        customError = {
            statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
            msg: `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`,
        };
    }
    return res.status(customError.statusCode).json({ msg: customError.msg });
};
