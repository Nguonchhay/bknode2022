const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

router.get('/contact', (req, res) => {
    res.send('<h1>Contact page</h1>');
});

router.get('/blogs', (req, res) => {
    res.send('<h1>Blog page</h1>');
});

module.exports = router;