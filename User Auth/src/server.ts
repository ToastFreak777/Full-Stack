import express from "express";
const app = express();

import "dotenv/config.js";
import "express-async-errors";
// logger
import morgan from "morgan";

const PORT = process.env.PORT || 3000;

// DB
import connectDB from "./db/connect.js";
// Error handlers
import notFoundMiddleware from "./middleware/notFound.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";
// Routers
import authRouter from "./routes/auth.js";
// Middleware
app.use(morgan("tiny"));
app.use([express.static("public"), express.urlencoded({ extended: true })]);
app.use("/api/v1/auth", authRouter);
app.use([notFoundMiddleware, errorHandlerMiddleware]);

app.listen(PORT, async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(`Server started on ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
