"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
exports.default = (req, res) => res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Route doesn't exist");
