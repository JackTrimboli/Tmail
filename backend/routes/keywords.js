const express = require("express");
const router = express();
const User = require("../models/user-model");

router.get("/", (req, res) => {
  res.send(req.user.keywords);
});

router.post("/", (req, res) => {
  console.log("Current req body: ", req.body);
  User.findByIdAndUpdate(
    req.body.userid,
    { $push: { keywords: req.body.phrase } },
    (err, user) => {
      if (err) console.log(err);
      else console.log(user);
    }
  );
});

router.delete("/", (req, res) => {
  console.log("Deletion attempt: ", req.body);
  User.updateOne(
    { _id: req.body.userid },
    { $pull: { keywords: req.body.phrase } },
    (err, user) => {
      if (err) console.log("An error occurred: ", err);
      else console.log("User found for keyword deletion: ", user);
    }
  );
});

module.exports = router;
