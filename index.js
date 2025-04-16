const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const authRouter = require("./routers/authRouter");
const app = express();
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ...");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });
app.use("/api/v1/auth", authRouter);
app.get("/", (req, res) => {
  res.json({ message: "Hello World from the server." });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running ...");
});
