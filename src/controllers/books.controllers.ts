import express, { Request, Response } from "express";
import { Book } from "../models/books.model";

export const BooksRoutes = express.Router();

BooksRoutes.post("/create-book", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const book = await Book.create(body);

    res.status(201).json({
      success: true,
      message: "Books data created successfuly",
      book: book,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

//All Data get

BooksRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const books = await Book.find();

    res.status(201).json({
      success: true,
      message: "Books data created successfuly",
      books,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

BooksRoutes.get("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);

    res.status(201).json({
      success: true,
      message: "Book retrieved successfully",
      book,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

//update Books
BooksRoutes.patch("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const updateBody = req.body;
    const book = await Book.findByIdAndUpdate(bookId, updateBody, {
      new: true,
    });

    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      book,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});

//----Delete Books
BooksRoutes.delete("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    // const updateBody = req.body;
    const book = await Book.findOneAndDelete({ _id: bookId });

    res.status(201).json({
      success: true,
      message: "Book deleted successfully",
      book,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
      error,
    });
  }
});
