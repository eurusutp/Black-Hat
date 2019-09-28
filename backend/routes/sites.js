// get express server
const express = require('express');
// resolve routes
const path = require('path');
// creates new express server
const router = express();
// server routing for pages hosted

// index html
router.get('/', (req, res, next) => {
    res.sendFile(path.resolve('..', 'frontend', 'index.html'));
});

// favicon
router.get('/favicon.ico', (req, res, next) => {
    res.sendFile(path.resolve('..', 'frontend', 'favicon.ico'));
});

// custom stylesheet
router.get('/css/styles.css', (req, res, next) => {
    res.sendFile(path.resolve('..', 'frontend', 'css', 'styles.css'));
});

// site images
router.get('/assets/images', (req, res, next) => {
    res.sendFile(path.resolve('..', 'frontend', 'assets', 'images'));
});

// frontend scripts
router.get('/assets/js', (req, res, next) => {
    res.sendFile(path.resolve('..', 'frontend', 'assets', 'js'));
});


module.exports = router;