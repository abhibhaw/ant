const express = require("express");
require("./db/db");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const schema = require("./graphql/schema");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const Admin = require("./models/admins/admin");
const Executive = require("./models/executives/executive");

// -------------------------------------END OF IMPORTS-------------------------------------

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.ALLOWED_CLIENT_URL,
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
    graphiql: Boolean(process.env.GRAPHIQL),
  })
);
// -------------------------------------END OF MIDDLEWARES-------------------------------------

app.get("/", function (req, res) {
  res.send("Hello from API");
});

// ------------------------------------------------Admin Login----------------------------------------------------

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

app.get("/logout", function (req, res) {
  req.logout();
  res.send(req.user);
});

// ------------------------------------------------Executive Login----------------------------------------------------

app.post("/executive/login", function (executiveRequest, executiveResponse) {
  Executive.findOne(
    { phone: executiveRequest.body.phone },
    async (err, executive) => {
      if (err) return executiveResponse.status(500).json({ err });
      if (!executive) return executiveResponse.send("No such executive exist");
      if (executive) {
        bcrypt.compare(
          executiveRequest.body.password,
          executive.password,
          (err, result) => {
            if (err) return executiveResponse.status(501).json({ err });
            if (result === true) {
              return executiveResponse.json({
                status: "Authenticated",
                id: executive._id,
                phone: executive.phone,
                firstName: executive.firstName,
                lastName: executive.lastName,
              });
            } else {
              return executiveResponse.send("Wrong Password");
            }
          }
        );
      }
    }
  );
});

// -------------------------------------END OF ROUTES-------------------------------------

app.listen(4000, () => {
  console.log("Server Started at PORT 4000");
});
