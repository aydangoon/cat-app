const path = require("path");
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(3000, function () {
  console.log("Listening on port 3000...");
});
