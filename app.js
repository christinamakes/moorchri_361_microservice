// Database
const db = require('./database/db')
const members = require('./routes/router')

/*
    SETUP
*/
const express = require('express');
const cors = require('cors');
const app     = express();
PORT        = process.env.PORT || 9124;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', members)


app.listen(PORT, function(){
});