import express from "express";
const router = express.Router();
router.route("/login", (req, res) => {
    res.send("Login Page");
});
export default router;
