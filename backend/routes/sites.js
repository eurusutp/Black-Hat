// get express server
const express = require('express');
// creates new express server
const router = express();
// server routing for pages hosted

router.get('/', (req, res, next) => res.sendFile('../../frontend/index.html'));

module.exports = router;