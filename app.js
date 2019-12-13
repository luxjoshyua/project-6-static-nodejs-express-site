// import express + require express
const express = require('express');

const routes = require('./routes');

// import body-parser and require
const bodyParser = require('body-parser');
// require the path module which can be used when setting the absolute path in the express.static function
const path = require('path');
// initialise express
const app = express();




// Import 404 and global error handlers
const errorHandlers = require('./errorHandlers');

// Setup middleware
// set `view engine` to `pug`
app.set('view engine', 'pug');
// use a static route and the express.static method to serve the static files located in the public folder
app.use('/static', express.static('public'));



// === Handle errors ====
// error handler sets the error message to user-friendly message, and sets the status code
// log out user friendly message to the console when app is pointed to non-existent url

// app.use('*', errorHandlers.handle404);

// app.use((err, req, res, next) => {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500; // Sets a generic server error status code if none is part of the err
  
//     if (err.shouldRedirect) {
//       res.render('error') // Renders a myErrorPage.html for the user
//     } else {
//       res.status(err.statusCode).send(err.message); // If shouldRedirect is not defined in our error, sends our original err data
//     }
//   });

// app.get('/', (req, res, next) => {
    
// })


// First check the routes
app.use('/', routes);
// If we can't find the route, we pass a 404 error
app.use(errorHandlers.handle404); 
// 
app.use((err, req, res, next) => {
    console.log(err.status)
    if (err.status === 404) {
        res.render('error')
    }
})


// Start the server, listen on port 3000, log which port the app is listening to
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})