var express = require("express");
const path = require("path");
var router = express.Router();

// define the home page route
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
});

router.post("*", (req, res) => {
  res.status(403).send("forbidden");
});

module.exports = router;
