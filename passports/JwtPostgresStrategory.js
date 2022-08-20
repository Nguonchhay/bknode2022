const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcryptjs = require('bcryptjs');

const { User } = require('./../models');


const initJwtPostgresStrategory = (passport) => {

    // Register strategory
    passport.use(
        'register',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            },
            async (req, email, password, done) => {
                try {
                    User.findOne(
                        { where: { email } }
                    ).then(queryUser => {
                        if (queryUser) {
                            done(true, 'User already existed!');
                        } else {
                            const salt = bcryptjs.genSaltSync(10);
                            const hashPassword = bcryptjs.hashSync(password, salt);
                            User.create({
                                email,
                                password: hashPassword,
                                name: req.body.name
                            }).then(createdUser => {
                                done(false, createdUser);
                            }).catch(err => {
                                console.log(err);
                                done(true, err);
                            });
                        }
                    }).catch(err => {
                        console.log('user catch: ', err);
                    });
                } catch (err) {
                    console.log(err);
                }
            }
        )
    );

    // Login strategory
    passport.use(
        'login',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            },
            async (req, email, password, done) => {
                try {
                    User.findOne({ where: { email } })
                        .then(queryUser => {
                            if (!queryUser) {
                                done(true, 'Invalid email');
                            } else {
                                if (bcryptjs.compareSync(password, queryUser.password)) {
                                    done(false, queryUser);
                                } else {
                                    done(true, 'Invalid password');
                                }
                            }
                        })
                        .catch(err => {
                            console.log('err');
                        })
                } catch(err) {
                    console.log(err);
                }
            }
        )
    );

    // Token verification strategy
    passport.use(
        'jwt',
        new JwtStrategy(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: 'bknode2022'
            },
            async (payload, done) => {
                User.findOne({ where: { email: payload.email } })
                    .then(user => {
                        if (user) {
                            done(false, user)
                        } else {
                            done(true, user)
                        }
                    })
                    .catch(err => {
                        console.log('err');
                    });
            }
        )
    );

    passport.serializeUser((user, done) => {
        process.nextTick(() => {
            done(null, { id: user.id, email: user.email, name: user.name });
        });
    })

    passport.deserializeUser((user, done) => {
        process.nextTick(() => {
            done(null, user);
        })
    });
};

module.exports = initJwtPostgresStrategory;