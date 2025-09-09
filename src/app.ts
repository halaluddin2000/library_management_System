import express, { Application, Request, Response } from "express";
import cors from "cors";
import { BooksRoutes } from "./controllers/books.controllers";
import { BorrowsRouter } from "./controllers/borrow.controller";

const app: Application = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/books", BooksRoutes);
app.use("/borrow", BorrowsRouter);

// Root route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library App");
});

export default app;
