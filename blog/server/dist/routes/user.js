"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
const imageUploader_1 = __importDefault(require("../middleware/imageUploader"));
const imageResizer_1 = __importDefault(require("../middleware/imageResizer"));
router
    .route("/")
    .get(user_1.getUserById)
    .patch(imageUploader_1.default.single("avatar"), imageResizer_1.default, user_1.updateUserById);
exports.default = router;
