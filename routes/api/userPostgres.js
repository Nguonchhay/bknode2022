const express = require('express');
const passort = require('passport');
const {
    register,
    login,
    detail
} = require('./../../controllers/api/userPostgresControoler');


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', passort.authenticate('jwt', {session: false}), detail);

router.get('/users', (req, res) => {
    res.json({
        data: [
            {
                "id": 1,
                "name": "Sok"
            }
        ]
    })
});

module.exports = router;