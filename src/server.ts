import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://library_management_System:dminmecndYjPHNj7@cluster0.jao09dz.mongodb.net/library_management_System?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Connected to MongoDB Using Mongoose!!");

    // Only run `listen()` locally
    if (process.env.NODE_ENV !== "production") {
      app.listen(PORT, () => {
        console.log(`App is listening locally on port ${PORT}`);
      });
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

main();

export default app;
