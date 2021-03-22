const passport = require('passport');
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Strategy = require('passport-jwt').Strategy;
const Admin = require('../models/admin');

passport.use(new Strategy({
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
}, async (payload, done) => {
    let admin = await Admin.findById(payload._id);
    done(!admin,admin);
}));