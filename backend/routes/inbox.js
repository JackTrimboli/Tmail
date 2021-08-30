const express = require("express");
const router = express();

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.redirect("/auth/google");
};

router.get("/", isLoggedIn, (req, res) => {
  res.json(req.user);
});

module.exports = router;
