import Book from "../models/book.js";
import { StatusCodes } from "http-status-codes";

export type Book = {
  title: String;
  author: String;
  price: Number;
  genre: String;
  date_published: Date;
};

export const getAllBooks = async (req: any, res: any) => {
  const books = await Book.find();
  res.status(StatusCodes.OK).json({ books, count: books.length });
};

export const createBook = async (req: any, res: any) => {
  const { title, author, price, genre, date_published }: Book = req.body;

  if (!title || !author || !price || !date_published)
    throw new Error("Please provide necessary fields");

  const book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};

export const getBookById = async (req: any, res: any) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book)
    return res.status(StatusCodes.NOT_FOUND).send(`No book with id of ${id}`);

  res.status(StatusCodes.OK).json({ book });
};

export const deleteBookById = async (req: any, res: any) => {
  const { id } = req.params;
  const book = await Book.findByIdAndRemove(id);

  if (!book)
    return res
      .status(StatusCodes.NOT_FOUND)
      .send(`No book with id of ${id} to delete`);

  res.status(StatusCodes.OK).send(`Book with id: ${book?._id} deleted`);
};

export const updateBookById = async (req: any, res: any) => {
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
