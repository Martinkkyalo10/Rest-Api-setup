require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// database connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connection to db established"));

// express middleware to parse requests with JSON payload. body-parser is required
app.use(express.json());

// routes
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(5000, () =>
  console.log(`Server started at port ${process.env.PORT}`)
);
