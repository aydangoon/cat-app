var express = require("express");
const path = require("path");
var router = express.Router();

// define the home page route
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
});

module.exports = router;
