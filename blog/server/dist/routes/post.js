"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = require("../controllers/post");
const authentication_1 = __importDefault(require("../middleware/authentication"));
const router = express_1.default.Router();
router.route("/").get(post_1.getAllUserPosts).post(authentication_1.default, post_1.createPost);
router.get("/user/:username", post_1.getAllSingleUserPosts);
router
    .route("/:id")
    .get(post_1.getPostById)
    .patch(authentication_1.default, post_1.updatePostById)
    .delete(authentication_1.default, post_1.deletePostById);
exports.default = router;
