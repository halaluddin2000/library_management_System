import express, { Application, Request, Response } from "express";
import cors from "cors";
import path from "path";
import { BooksRoutes } from "./controllers/books.controllers";
import { BorrowsRouter } from "./controllers/borrow.controller";

const app: Application = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/books", BooksRoutes);
app.use("/borrow", BorrowsRouter);

// Serve React static files
const __dirnamePath = path.resolve();
app.use(express.static(path.join(__dirnamePath, "dist")));

// Catch-all route for React Router
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirnamePath, "dist", "index.html"));
});

export default app;
