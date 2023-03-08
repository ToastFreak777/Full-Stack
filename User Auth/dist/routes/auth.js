import express from "express";
const router = express.Router();
import { createUser, loginUser } from "../controllers/auth.js";
router.post("/login", loginUser);
router.post("/register", createUser);
export default router;
