import express from "express";
const router = express.Router();
import { getAllBooks, createBook, getBookById, deleteBookById, updateBookById, } from "../controllers/books.js";
router.route("/").get(getAllBooks).post(createBook);
router
    .route("/:id")
    .get(getBookById)
    .delete(deleteBookById)
    .patch(updateBookById);
export default router;
