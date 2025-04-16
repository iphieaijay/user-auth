const express = require("express");
const authRouter = express.Router();

authRouter.post("/signUp", (req, res) => {
  res.json({ message: "Signup successful!" });
});

module.exports = authRouter;
