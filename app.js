// import express + require express
const express = require('express');
// import body-parser and require
const bodyParser = require('body-parser'); 
// require the data json file
const { projects } = require('data.json');
// require the path module which can be used when setting the absolute path in the express.static function
const path = require('path');
// initialise express
const app = express();

// Setup middleware
// set `view engine` to `pug`
app.set('view engine', 'pug');
// use a static route and the express.static method to serve the static files located in the public folder
app.use('/static', express.static('public'));

// Setup routes

// An "index" route (/) to render the "Home" page with the locals set to data.projects
router.get('/', (req, res) => {
    res.render('index')
    app.locals = projects; 
})

// An "about" route (/about) to render the "About" page
router.get('/about', (req, res) => {
    res.render('/about');
})

// Dynamic "project" routes (/project or /projects) based on the id of the project that render a customized version 
// of the Pug project template to show off each project. 

// Which means adding data, or "locals", as an object that contains 
// data to be passed to the Pug template

router.get('/project/:id', (req, res) => {
    const { data } = 
    console.log('ID:', req.params.id)
    // get the id from the url using reqs.params
    id = req.params.id

    

    // loop through data
})  