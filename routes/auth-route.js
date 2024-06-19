const express = require("express");

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  console.log("login...");
});

module.exports = authRouter;
