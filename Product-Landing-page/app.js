require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.static("./public"));

const listener = app.listen(process.env.PORT || 3000, () =>
  console.log(`Server listening on port ${listener.address().port}...`)
);
