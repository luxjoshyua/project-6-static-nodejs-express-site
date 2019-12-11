// import express
const express = require('express');

// initialise express
const app = express();


// reference the public folder and its children, so the stylesheets work
app.use('/static', express.static('public'));
