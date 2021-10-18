const express = require("express");
const router = express();
const passport = require("passport");

router.get("/", (req, res) => {
  res.redirect("/auth/google");
});
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/gmail.readonly",
      "profile",
      "email",
    ],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // res.send(req.user);
  res.redirect("http://localhost:3000");
});

router.get("/getuser", (req, res) => {
  req.user ? res.send(req.user) : res.send("nouser");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/login");
});

module.exports = router;
