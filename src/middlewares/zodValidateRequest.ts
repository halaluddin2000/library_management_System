import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validateRequest =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        error: error.errors,
      });
    }
  };
