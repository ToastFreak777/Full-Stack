"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.updateUserById = void 0;
const http_status_codes_1 = require("http-status-codes");
const BadRequest_1 = __importDefault(require("../errors/BadRequest"));
const user_1 = __importDefault(require("../models/user"));
const updateUserById = async (req, res) => {
    if (!req.body)
        throw new BadRequest_1.default("No data provided to update");
    console.log(req.file);
    console.log(req.body);
    const user = await user_1.default.findByIdAndUpdate(req.user.userId, { ...req.body, avatar: req.file.filename }, {
        runValidators: true,
        new: true,
    }).select("-_id -password -__v");
    res.status(http_status_codes_1.StatusCodes.OK).json(user);
};
exports.updateUserById = updateUserById;
const getUserById = async (req, res) => {
    const user = await user_1.default.findById(req.user.userId).select("-password -__v");
    res.status(http_status_codes_1.StatusCodes.OK).json(user);
};
exports.getUserById = getUserById;
