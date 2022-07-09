const express = require('express');

const router = express.Router();

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