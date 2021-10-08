require("dotenv/config");

const authRoutes = require("./routes/auth");
const keywordRoute = require("./routes/keywords");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const cors = require("cors");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("./models/user-model");
const cookieSession = require("cookie-session");

const app = express();

app.use(express.json());

app.use(
  cookieSession({
    maxAge: 1000 * 60 * 60 * 24 * 7,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

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

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.set("trust proxy", 1);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("passport callback function fired");
      User.findOne({
        googleId: profile.id,
      }).then((currentUser) => {
        if (currentUser) {
          //User exists in DB
          console.log("returning user: ", currentUser);
          done(null, currentUser);
        } else {
          //new user
          new User({
            username: profile.displayName,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log("New User: ", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);

//takes the entire user obj we get from auth and stores into session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//Takes entire user obj from session and attaches it to req.user obj, which we can access
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
app.use(express.urlencoded({ extended: false }));

app.use("/keywords", keywordRoute);
app.use("/auth", authRoutes);

app.listen(5000, () => console.log("Listening on PORT: 5000"));
