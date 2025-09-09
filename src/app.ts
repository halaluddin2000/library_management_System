import express, { Application, Request, Response } from "express";
import { BooksRoutes } from "./controllers/books.controllers";
import { BorrowsRouter } from "./controllers/borrow.controller";

const app: Application = express();

app.use(express.json());

app.use("/books", BooksRoutes);
app.use("/borrow", BorrowsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library App");
});

export default app;
