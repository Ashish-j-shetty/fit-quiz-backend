const express = require("express");

const quizData = require("../db/data");

const router = express.Router();

router.route("/").get((req, res) => {
  res.json({
    success: true,
    quiz: quizData,
    message: "quiz data fetched successfully",
  });
});

module.exports = router;
