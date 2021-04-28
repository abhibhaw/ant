const express = require("express");
require("./db/db");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const schema = require("./graphql/schema");
const passport = require("passport");
const passportLocal = require("passport-local");
const bcrypt = require("bcryptjs");
const Admin = require("./models/admins/admin");

// -------------------------------------END OF IMPORTS-------------------------------------

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.ENCRYPTION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  })
);
app.use(cookieParser(process.env.ENCRYPTION_SECRET));
app.use(passport.initialize());
app.use(passport.session());
require("./helpers/passport")(passport);
app.use(
  "/api",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// -------------------------------------END OF MIDDLEWARES-------------------------------------

app.get("/", function (req, res) {
  res.send("Hello from API");
});

app.post("/login", function (req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
});

app.post("/register", function (req, res) {
  Admin.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newAdmin = new Admin({
        username: req.body.username,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      });
      await newAdmin.save();
      res.send("User Created");
    }
  });
});

app.get("/user", (req, res) => {
  res.send(req.user);
});
// -------------------------------------END OF ROUTES-------------------------------------

app.listen(4000, () => {
  console.log("Server Started at PORT 4000");
});
