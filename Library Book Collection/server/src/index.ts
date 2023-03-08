import express from "express";
const app = express();

import "dotenv/config.js";
import "express-async-errors";
import morgan from "morgan";
import "colors";

const PORT = process.env.PORT || 3000;

app.use([express.urlencoded({ extended: true }), express.json()]);

// DB connection
import connectDB from "./db/connect.js";

// Middleware
import errorHandler from "./middleware/errorHandler.js";

// Routers
import BookRouter from "./routes/book.js";

app.use(morgan("tiny"));
app.use("/api/v1/books", BookRouter);
app.use(errorHandler);

app.listen(PORT, async () => {
  try {
    const db: any = await connectDB(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${db.connection.host}`.green.underline);

    console.log(`Server listening on ${PORT}`.cyan.underline);
  } catch (error) {
    console.log(error);
  }
});
