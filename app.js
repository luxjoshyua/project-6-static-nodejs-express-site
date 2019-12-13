// import express + require express
const express = require('express');
// import body-parser and require
const bodyParser = require('body-parser');
// require the data json file
// const { projects } = require('data.json');
// require the path module which can be used when setting the absolute path in the express.static function
const path = require('path');
// initialise express
const app = express();
// setup a new router
const router = express.Router();
// define projects
const data = require('./data.json');


// Setup middleware
// set `view engine` to `pug`
app.set('view engine', 'pug');
// use a static route and the express.static method to serve the static files located in the public folder
app.use('/static', express.static('public'));

// ==== Setup routes ====
// An "index" route (/) to render the "Home" page with the locals set to data.projects
router.get('/', (req, res) => {
    console.log("Handling request to root or 'home' route, '/'");
    res.render('index')
    // app.locals = projects; 
});

// An "about" route (/about) to render the "About" page
router.get('/about', (req, res, next) => {
    res.render('/about');
});

// Dynamic "project" routes (/project or /projects) based on the id of the project that render a customized version 
// of the Pug project template to show off each project. 

// Which means adding data, or "locals", as an object that contains 
// data to be passed to the Pug template

router.get('/project/:paramId', (req, res, next) => {
    // add data or 'locals' as an object that contains data to be passed to the Pug template

    const { paramId } = req.params;
    // console.log(paramId);

    // loop through projects
    for (let i = 0; i < data.projects.length; i++) {
        console.log(i);
        if (data.projects[i].id === paramId) {
            // return the template that matches that id
            console.log("The id matches " + paramId)
            return res.render('project', data.projects[i]);
        }
        console.log("The id doesn't match")
    }
    // res.send() sends a message to the client e.g. browser
    return res.send('error');
    
})

// define this at the bottom
// pass router handlers to the app
app.use(router);

// Start the server, listen on port 3000, log which port the app is listening to
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})