"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.loginUser = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const http_status_codes_1 = require("http-status-codes");
require("colors");
const BadRequest_1 = __importDefault(require("../errors/BadRequest"));
const Unauthorized_1 = __importDefault(require("../errors/Unauthorized"));
const createUser = async (req, res) => {
    const { username, email, password, confirm_password } = req.body;
    if (!username || !email || !password || !confirm_password)
        throw new BadRequest_1.default("Please fill in all fields");
    if (password !== confirm_password)
        throw new BadRequest_1.default("Passwords do not match");
    const user = await user_1.default.create(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ user: user._id, success: true });
};
exports.createUser = createUser;
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        throw new BadRequest_1.default("Please fill in all fields");
    const user = await user_1.default.findOne({ email });
    if (!user)
        throw new Unauthorized_1.default("Invalid credentials");
    const passwordIsCorrect = await user.verifyToken(password);
    if (!passwordIsCorrect)
        throw new Unauthorized_1.default("Invalid credentials");
    const token = user.generateToken();
    return res
        .status(http_status_codes_1.StatusCodes.OK)
        .json({ token, username: user.username, success: true });
};
exports.loginUser = loginUser;
const updateUser = async (req, res) => {
    if (!req.body)
        throw new BadRequest_1.default("No data provided to update user");
    const usernameTaken = await user_1.default.findOne({ username: req.body.username });
    if (usernameTaken)
        throw new Error("Username already exists");
    const emailTaken = await user_1.default.findOne({ email: req.body.email });
    if (emailTaken)
        throw new Error("Email already exists");
    // use id to get user from server and update
    res.status(http_status_codes_1.StatusCodes.OK);
    // .json({ username: user.username, id: user._id, success: true });
};
exports.updateUser = updateUser;
