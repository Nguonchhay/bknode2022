const User = require('../models_mongoose/User');

module.exports = (passport) => {

    passport.use(User.createStrategy());

    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
}