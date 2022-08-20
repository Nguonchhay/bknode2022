const passport = require('passport');
const jwt = require('jsonwebtoken');
const initJwtPostgresStrategory = require('./../../passports/JwtPostgresStrategory');

initJwtPostgresStrategory(passport);

const register = (req, res, next) => {
    passport.authenticate('register', {session: false}, (err, user) => {
        if (err) {
            console.log(user);
            res.json({
                success: false,
                err: 'User is existed!'
            });
        } else {
            res.json({
                success: true,
                user
            });
        }
    })(req, res, next);
};

const login = (req, res, next) => {
    passport.authenticate('login', {session: false}, async (err, user) => {
        if (err) {
            console.log(user);
            res.json({
                success: false,
                err: user
            });
        } else {
            const secretkey = 'bknode2022';
            const token = await jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    name: user.name
                },
                secretkey,
                { expiresIn: '5m' }
            );
            res.json({
                success: true,
                token
            });
        }
    })(req, res, next);
};

const detail = (req, res, next) => {
    res.json({
        success: true,
        user: {
            id: req.user.id,
            email: req.user.email,
            name: req.user.name
        }
    });
};

module.exports = {
    register,
    login,
    detail
}