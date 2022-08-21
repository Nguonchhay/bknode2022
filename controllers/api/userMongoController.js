const User = require('./../../models_mongoose/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');

require('./../../passports/JwtMongoStrategory')(passport);

const register = async (req, res) => {
    const newUser = new User({
        email: req.body.email,
        name: req.body.name
    });

    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            res.json({
                success: false,
                error: err
            });
        } else {
            res.json({
                success: true, 
                user
            });
        }
    });
};

const login = (req, res) => {
    passport.authenticate('local', async (err, user) => {
        if (err) {
            res.json({
                success: false,
                messsage: err
            });
        }

        if (!user) {
            return res.json({
                success: false,
                message: 'Email or password are invalid!'
            });
        }

        const secretkey = 'bknode2022';
        const token = await jwt.sign(
            {
                id: user._id,
                email: user.email,
                name: user.name
            },
            secretkey,
            { expiresIn: '10m' }
        );

        return res.json({
            success: true,
            token
        });
    })(req, res);
};

const show = (req, res) => {
    res.json({
        user: req.user
    });
}

module.exports = {
    login,
    register,
    show
}