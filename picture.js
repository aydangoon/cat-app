const mongoose = require("mongoose");

const schema = mongoose.Schema({
  url: String,
  votes: Number,
});

module.exports = mongoose.model("Picture", schema);
