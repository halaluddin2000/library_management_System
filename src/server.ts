import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const PORT = 5000;

// userName: library_management_System;
// pass: dminmecndYjPHNj7;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://library_management_System:dminmecndYjPHNj7@cluster0.jao09dz.mongodb.net/library_management_System?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB Using Mongoose!!");
    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

// import app from "./app";
// import mongoose from "mongoose";

// const PORT = process.env.PORT || 5000;

// async function main() {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://library_management_System:dminmecndYjPHNj7@cluster0.jao09dz.mongodb.net/library_management_System?retryWrites=true&w=majority&appName=Cluster0"
//     );
//     console.log("Database connected successfully");

//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } catch (err) {
//     console.error("Error connecting to database", err);
//   }
// }

// main();
