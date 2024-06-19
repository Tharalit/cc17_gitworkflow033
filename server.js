const express = require("express");
const authRouter = require("./routes/auth-route");

const app = express();

app.use("/auth", authRouter);

const port = 8000;
app.listen(port, () => {
  console.log(port, " is running");
});
