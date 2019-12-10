const express = require('express');
const http = require('http');
const expressEjsLayout = require('express-ejs-layouts');
const path = require('path');
const indexRouter = require('./routes/index');
require('dotenv').config();

var app = express();
var server = http.createServer(app);
const port = process.env.PORT;


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

//Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(expressEjsLayout);
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', indexRouter);


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});