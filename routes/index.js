// initialise express app
const express = require('express');
// setup a new router
const router = express.Router();
// require the data json file + define projects
const data = require('../data.json');

// ==== Setup routes ====
// An "index" route (/) to render the "Home" page with the locals set to data.projects
router.get('/', (req, res) => {
    res.render('index')
});

// An "about" route (/about) to render the "About" page
router.get('/about', (req, res, next) => {
    res.render('/about');
});

// Dynamic "project" routes (/project or /projects) based on the id of the project that render a customized version 
// of the Pug project template to show off each project. 
router.get('/project/:paramId', (req, res, next) => {
    // add data or 'locals' as an object that contains data to be passed to the Pug template
    const {
        paramId
    } = req.params;
    // console.log(paramId);
    // loop through projects
    for (let i = 0; i < data.projects.length; i++) {
        // check what i equals
        console.log(i);
        // if the project id matches the url parameter id
        if (data.projects[i].id === paramId) {
            // console.log("The id matches " + paramId)
            // return the template that matches that id
            return res.render('project', data.projects[i]);
        }
        // console.log("The id doesn't match")
    }
    // res.send() sends a message to the client e.g. browser
    return res.send('error');
})


module.exports = router;