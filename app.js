'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./conn');

const app = express();
const port =  process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// routes
app.use('/', require('./routes/profile')());

connect().then(() => {
    try {
        app.listen(port,() => {
            console.log('Express started. Listening on %s', port);
        })
    } catch (error) {
        console.log("Error to connect");
    }
});

