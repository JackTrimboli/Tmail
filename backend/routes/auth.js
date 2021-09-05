const express = require("express");
const router = express();
const passport = require("passport");

router.get("/", (req, res) => {
  res.redirect("/auth/google");
});
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/inbox",
    failureRedirect: "http://localhost:3000/login",
  })
);
router.get("/failure", (req, res) => {
  res.send("Authentication Failed.");
});
router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Goodbye!");
});

module.exports = router;
