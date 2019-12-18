const express = require('express');
const router = express.Router();
const projects = require('../data.json');

/**
 * 404 and Global Error Handlers
 */
router.all('*', (req, res, next) => {
  
    // Create new error to handle non-existent routes
    const err = new Error('Page not found!');
    err.status = 404;
    console.log(`Something went wrong. Status: ${err.status}, Message: ${err.message}, Stack: ${err.stack}`)
    // Pass error to global error handler below
    next(err);
});

router.use((err, req, res, next) => {
    res.render('error', {
        error : err
    });
});

// Export error handlers
module.exports = router;