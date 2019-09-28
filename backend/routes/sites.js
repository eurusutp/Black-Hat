// get express server
const express = require('express');
// resolve routes
const path = require('path');
// creates new express server
const router = express();
// server routing for pages hosted

// static folder
router.use('/', express.static(path.resolve('..', 'frontend')));


module.exports = router;