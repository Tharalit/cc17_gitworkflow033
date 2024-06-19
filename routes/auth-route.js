const express = require("express");

const authRouter = express.Router();

authRouter.post("/register", () => {
  console.log("Register...");
});

// asd

module.exports = authRouter;
