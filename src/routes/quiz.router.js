const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ success: true, message: "quiz data fetched successfully" });
});

module.exports = router;
