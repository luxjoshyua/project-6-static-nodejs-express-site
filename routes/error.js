const express = require('express');
const router = express.Router();
const projects = require('../data.json');

/**
 * 404 and Global Error Handlers
 */
router.all('*', (req, res, next) => {
    const projectsLoop = Object.values(projects);
    projectsLoop.forEach(project => {
        if (req.url === `/project/${project.id}`) {
            return next();
        }
    });
    // Create new error to handle non-existent routes
    const err = new Error('err');
    err.status = 404;
    console.log(`Something went wrong. Status: ${err.status}, Message: ${err.message}, Stack: ${err.stack}`)
    // Pass error to global error handler below
    next(err);
});

router.use((err, req, res, next) => {
    res.locals.error = err;
    res.render('error')
})

// Export error handlers
module.exports = router;