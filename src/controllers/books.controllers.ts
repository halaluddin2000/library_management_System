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
      data: book,
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
    //----------filter: Filter by genre
    // const booksGenre = req.query.genre ? req.query.genre : "";
    // let books = [];
    // if ((books = await Book.find({ genre: booksGenre }))) {
    // } else {
    //   books = await Book.find();
    // }

    //----------sort: asc or desc

    //const book = await Book.find().sort({ genre: 1 });
    //const book = await Book.find().sort({ genre: -1 });

    // -----------limit: Number of results (default: 10)
    const book = await Book.find().limit(10);

    //----------all books find
    // const books = await Book.find();

    res.status(201).json({
      success: true,
      message: "Books retrieved successfully",
      data: book,
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
      data: book,
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
      data: book,
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
      data: book,
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
