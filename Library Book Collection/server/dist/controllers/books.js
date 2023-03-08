import Book from "../models/book.js";
import { StatusCodes } from "http-status-codes";
export const getAllBooks = async (req, res) => {
    const books = await Book.find();
    res.status(StatusCodes.OK).json({ books, count: books.length });
};
export const createBook = async (req, res) => {
    const { title, author, price, genre, date_published } = req.body;
    if (!title || !author || !price || !date_published)
        throw new Error("Please provide necessary fields");
    const book = await Book.create(req.body);
    res.status(StatusCodes.CREATED).json({ book });
};
export const getBookById = async (req, res) => {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book)
        return res.status(StatusCodes.NOT_FOUND).send(`No book with id of ${id}`);
    res.status(StatusCodes.OK).json({ book });
};
export const deleteBookById = async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByIdAndRemove(id);
    if (!book)
        return res
            .status(StatusCodes.NOT_FOUND)
            .send(`No book with id of ${id} to delete`);
    res.status(StatusCodes.OK).send(`Book with id: ${book?._id} deleted`);
};
export const updateBookById = async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!book)
        return res
            .status(StatusCodes.NOT_FOUND)
            .send(`No book with id of ${id} to delete`);
    res.status(StatusCodes.OK).json({ book });
};
