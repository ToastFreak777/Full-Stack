"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = require("fs");
exports.default = (req, res, next) => {
    (0, sharp_1.default)(req.file.path)
        .resize(125, 125)
        .toBuffer((err, buf) => {
        if (err)
            return next(err);
        (0, fs_1.writeFileSync)(`${req.file.destination}/${req.file.filename}`, buf);
        next();
    });
};
