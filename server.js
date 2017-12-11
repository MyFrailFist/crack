'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var socket_io = require('socket.io');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
// var device = require('express-device');


var passport = require('passport');
var session = require('express-session');

// mongoose.connect('mongodb://chris12:12chris@ds155315.mlab.com:55315/variantz-development');
mongoose.connect('mongodb://pseudo:hahaha123@ds135876.mlab.com:35876/variantz_test');

//mongoose.connect(config.mongoUrlProduction)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
  });

var app = express();


var io = socket_io();
app.io = io;
io.on('connection', function(socket) {
  // the primary socket at '/' 
  console.log('user ' + socket.id + ' has connected on /');
});



// Parsers
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


// API location
var routes = require('./server/routes/index.js')(app);


module.exports = app;