import express from "express";
import { validateRequest } from "../middlewares/zodValidateRequest";
import { createBookZodSchema } from "../validation/book.validation";
import { createBook } from "../controllers/books.controllers";

const router = express.Router();

router.post("/api/books", validateRequest(createBookZodSchema), createBook);

export default router;
