import { model, Schema, Types } from "mongoose";

export const borrowSchema = new Schema(
  {
    book: { type: Types.ObjectId, ref: "Book", required: true },
    quantity: { type: Number, required: true, min: 1 },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const Borrow = model("Borrow", borrowSchema);
