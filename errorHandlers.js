/**
 * 404 and Global Error Handlers
 */

// Error handler for handling non-existent routes
const handle404 = (req, res, next) => {
    // Log statement to indicate function is running
    console.log('Handling 404 error');
    // Create new error to handle non-existent routes
    const err = new Error('err');
    err.status = 404;
    err.message = 'Oops, page not found. Looks like that route does not exist.';
    // Pass error to global error handler below
    next(err);
};

// Global error handlers
const handleGlobalError = (err, req, res, next) => {
    console.log('Handling a global error', err);

    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Set error status and send error message to the page
    res.status(err.status || 500);
    res.send(err.message);
};

// Export error handlers
// Assign module.exports an object that references each function
module.exports = { handle404, handleGlobalError };