const express = require('express');
const router = express.Router();

// An "about" route (/about) to render the "About" page
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router; 
