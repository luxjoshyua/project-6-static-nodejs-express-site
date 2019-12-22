// Require constants
// import express + require express
const express = require('express');
// import body-parser and require
const bodyParser = require('body-parser');
// import routes
const index = require('./routes/index');
const about = require('./routes/about');
const projectRoutes = require('./routes/projects');
// import 404 and global error handlers
const errorHandlers = require('./routes/error');

// initialise new express app
const app = express();

// for heroku deployment
let port = process.env.PORT || 3000; 

// set view engine to pug
app.set('view engine', 'pug');
// set route for static files
app.use('/static', express.static('public'));
// use the routes
app.use(index);
app.use(about);
app.use(projectRoutes);
app.use(errorHandlers); 

// Start the server, listen on port 3000, log which port the app is listening to
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})