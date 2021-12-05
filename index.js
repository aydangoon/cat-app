const path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const pages = require("./routes/pages");
const api = require("./routes/api");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend", "build")));

app.use("/api", api);

app.use("/", pages);

app.listen(3000, function () {
  console.log("Listening on port 3000...");
});
