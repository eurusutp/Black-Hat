// get express server
const express = require('express');
// resolve routes
const path = require('path');
// creates new express server
const router = express();
// server routing for pages hosted

// static app
router.use('/', express.static(path.resolve('..', 'static')));

// react app
router.use('/react', express.static(path.resolve('..', 'react')));


module.exports = router;