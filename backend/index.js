require("./auth");
require("dotenv/config");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log("connected to mongo!");
  })
  .catch((err) => {
    console.log("An error occurred connecting to mongo.", err);
  });

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: "/user",
    failureRedirect: "/auth/failure",
  })
);
app.get("/user", isLoggedIn, (req, res) => {
  res.send(res.username);
});

app.get("/auth/failure", (req, res) => {
  res.send("Authenication Failed.");
});
app.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Goodbye!");
});

app.get("/apitest", (req, res) => {
  res.send("This api is working!");
});
app.listen(5000, () => console.log("Listening on PORT: 5000"));
