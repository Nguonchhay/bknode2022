const express = require('express');
const { 
    homeView,
    contactView,
    blogsView
} = require('./../../controllers/pageController');

const router = express.Router();

router.get('/', homeView);
router.get('/contact', contactView);
router.get('/blogs', blogsView);

module.exports = router;