require("dotenv/config");
require("./passportsetup");
const inboxRoutes = require("./routes/inbox");
const authRoutes = require("./routes/auth");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.COOKIE_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(
  cors({
    origin: "*",
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/inbox", inboxRoutes);
app.use("/auth", authRoutes);

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

app.listen(5000, () => console.log("Listening on PORT: 5000"));
