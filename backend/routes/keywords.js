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

module.exports = router;
