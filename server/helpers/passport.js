const Admin = require("../models/admins/admin");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local");

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      Admin.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    Admin.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      };
      cb(err, userInformation);
    });
  });
};
