require("dotenv/config");
require("./passportsetup");
const inboxRoutes = require("./routes/inbox");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(
  session({
    secret: process.env.COOKIE_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/inbox", inboxRoutes);

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

app.get("/", (req, res) => {
  res.redirect("/auth/google");
});
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/home",
    failureRedirect: "/auth/failure",
  })
);
app.get("/auth/failure", (req, res) => {
  res.send("Authentication Failed.");
});
app.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Goodbye!");
});

app.listen(5000, () => console.log("Listening on PORT: 5000"));
