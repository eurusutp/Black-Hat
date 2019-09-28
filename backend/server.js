// get express server
const express = require('express');
// creates new express server
const app = express();
// server port where it's going to be listening
const PORT = 3000;

app.use('/', (req, res, next) => {
    res.send('It works!');
});

// starts server listening
app.listen(PORT);