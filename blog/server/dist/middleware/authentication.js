"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Unauthorized_1 = __importDefault(require("../errors/Unauthorized"));
exports.default = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Bearer "))
        throw new Unauthorized_1.default("Authenication token Invalid");
    const token = authorization.split(" ")[1];
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = { userId: payload.userId };
        next();
    }
    catch (error) {
        console.log(error.message);
        throw new Unauthorized_1.default("Authenication Invalid");
    }
};
