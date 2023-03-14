import express from "express";
const app = express();

import "dotenv/config";
import "express-async-errors";
import "colors";
import morgan from "morgan";

const PORT = process.env.PORT || 3000;

// Utils
import path from "path";

// Routers
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import postRouter from "./routes/post";
import connectDB from "./db/connect";

// Middleware
import notFoundHandler from "./middleware/notFoundHandler";
import errorHandlerMiddleware from "./middleware/errorHandler";
import authenticationMiddleware from "./middleware/authentication";

app.use([morgan("tiny")]);
app.use("/static", express.static(path.join(__dirname, "../", "public")));
app.use([express.urlencoded({ extended: true }), express.json()]);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", authenticationMiddleware, userRouter);
app.use("/api/v1/post", postRouter);
app.use([notFoundHandler, errorHandlerMiddleware]);

const start = async () => {
  try {
    const db: any = await connectDB(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${db.connection.host}`.green.underline);

    app.listen(PORT, () => {
      console.log(
        `Server listening on http://localhost:${PORT}`.underline.cyan
      );
    });
  } catch (error) {
    console.log(`Error on startup ${error}`.red);
  }
};

start();
