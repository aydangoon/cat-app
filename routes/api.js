var express = require("express");
const db = require("../db");
const path = require("path");
var router = express.Router();

router.get("/top", async function (req, res) {
  console.log("hi");
  const keys = await db.keys("*").then((err, k) => {
    console.log("here", err, k);
    return err;
  });
  console.log(keys);
  let topTen = await keys.map(async (key) => {
    const value = parseInt(await db.get(key));
    console.log("key", key, "value", value);
    return { key, value };
  });
  console.log("topten", topTen);
  topTen.sort((a, b) => a.value - b.value);
  res.send({ top: topTen.slice(0, 10) });
});

router.post("/vote", async (req, res) => {
  console.log("reqbody:", req.body, db);
  const { url, vote } = req.body;
  if (!(await db.exists(url))) {
    db.set(url, vote.toString());
  } else {
    let val = parseInt(await db.get(url));
    val += parseInt(vote);
    db.set(url, val.toString());
  }
  res.status(200);
  res.send({ url, val: await db.get(url) });
});

module.exports = router;
