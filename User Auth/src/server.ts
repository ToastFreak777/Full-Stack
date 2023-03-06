import express from "express";
const app = express();
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use([express.static("./public")]);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
