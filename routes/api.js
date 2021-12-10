const express = require("express");
const Picture = require("../picture.js");
const router = express.Router();

router.get("/top", async (req, res) => {
  console.log("request @ /top");
  const pics = await Picture.find();
  pics.sort((a, b) => b.votes - a.votes);
  res
    .status(200)
    .send({ top: pics.slice(0, 10).map(({ url, votes }) => ({ url, votes })) });
});

router.post("/vote", async (req, res) => {
  const { url, vote } = req.body;
  console.log("post @ /vote", url, vote);
  Picture.findOne({ url }, async (err, pic) => {
    if (err) {
      console.error(err);
      res.status(500).send("error");
    } else if (pic) {
      pic.votes += vote;
      await pic.save();
      res.status(200).send("updated!");
    } else {
      const newPic = new Picture({
        url,
        votes: vote,
      });
      await newPic.save();
      res.status(200).send("added!");
    }
  });
});

module.exports = router;
