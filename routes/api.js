const express = require("express");
const Pic = require("../pic.js");
const router = express.Router();

router.get("/top", async (req, res) => {
  const pics = await Pic.find();
  pics.sort((a, b) => b.votes - a.votes);
  res
    .status(200)
    .send({ top: pics.slice(0, 10).map(({ url, votes }) => ({ url, votes })) });
});

router.post("/vote", async (req, res) => {
  const { url, vote } = req.body;
  Pic.findOne({ url }, async (err, pic) => {
    if (err) {
      console.error(err);
      res.status(500).send("error");
    } else if (pic) {
      pic.votes += vote;
      await pic.save();
      res.status(200).send("updated!");
    } else {
      const newPic = new Pic({
        url,
        votes: vote,
      });
      await newPic.save();
      res.status(200).send("added!");
    }
  });
});

module.exports = router;
