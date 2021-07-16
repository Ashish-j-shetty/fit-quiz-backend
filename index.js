const express = require("express");

const cors = require("cors");

const quizRouter = require("./src/routes/quiz.router");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/quiz", quizRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to quiz api explorer</h1>");
});

app.listen(PORT, () => {
  console.log("Server started at port:", PORT);
});
