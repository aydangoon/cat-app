const path = require("path");
var express = require("express");
var cors = require("cors");

// mongodb connection
const mongoose = require("mongoose");
const url = `mongodb+srv://username:securepassword123@cluster0.u0hlo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

(async () => {
  await mongoose.connect(url).catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
})();

var bodyParser = require("body-parser");
var app = express();
app.use(cors());

const pages = require("./routes/pages");
const api = require("./routes/api");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend", "build")));

app.use("/api", api);

app.use("/", pages);

const server = app.listen(3000, function () {
  console.log("Listening on port 3000...");
});

module.exports = server;
