const express = require('express');
const {
    login,
    register,
    show
} = require('./../../controllers/api/userMongoController');
const { authApiMiddleware } = require('./../../middlewares/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authApiMiddleware, show);

module.exports = router;