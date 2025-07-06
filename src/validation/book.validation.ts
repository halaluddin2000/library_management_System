import { z } from "zod";

export const genreOptions = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
] as const;

export const createBookZodSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  genre: z.enum(genreOptions),
  isbn: z.string().min(10, "ISBN must be at least 10 characters"),
  description: z.string().optional(),
  copies: z.number().min(0, "Copies must be a non-negative number"),
  available: z.boolean().optional(),
});
