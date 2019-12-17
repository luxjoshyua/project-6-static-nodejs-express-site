// initialise express app
const express = require('express');
// setup a new router
const router = express.Router();
// require the data json file + define projects
const { projects } = require('../data.json');

// ==== Setup routes ====
// An "index" route (/) to render the "Home" page with the locals set to data.projects
router.get('/', (req, res) => {
    res.render('index', { projects });
});

module.exports = router; 
