const express = require('express');
const router = express.Router();
// data isn't an object!
const data = require('../data.json'); 

// Dynamic "project" routes (/project or /projects) based on the id of the project that render a customized version 
// of the Pug project template to show off each project. 
router.get('/projects/:paramId', (req, res, next) => {
    // add data or 'locals' as an object that contains data to be passed to the Pug template
    const { paramId } = req.params;
    // loop through projects
    for (let i = 0; i < data.projects.length; i++) {
        // check what i equals
        // console.log(i);
        // if the project id matches the url parameter id
        if (data.projects[i].id === paramId) {
            // return the template that matches that id
            return res.render('project', data.projects[i]);
        }
        // console.log("The id doesn't match")
    }

    // res.send() sends a message to the client e.g. browser
    // return res.send("<h1>Apologies, that project doesn't exist, yet!</h1>");

    return next();
    
    
})

// export the router so we can use it in the main app.js file
module.exports = router;