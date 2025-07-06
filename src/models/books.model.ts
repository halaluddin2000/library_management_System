import { model, Schema } from "mongoose";
import { genreOptions, IBook } from "../interfaces/books.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    genre: {
      type: String,
      required: true,
      enum: genreOptions,
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies must be a positive number"],
    },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Static Method
bookSchema.statics.findAvailableBooks = function () {
  return this.find({ available: true });
};

export const Book = model<
  IBook,
  { findAvailableBooks: () => Promise<IBook[]> }
>("Book", bookSchema);
