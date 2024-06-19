const express = require("express");

const authRouter = express.Router();


authRouter.post("/login", (req, res) => {
  console.log("login...");
});


authRouter.post("/register", (req,res) => {
  console.log("Register...");
});

// asd

module.exports = authRouter;
