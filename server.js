const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const app = express();


var passport = require('passport');
var session = require('express-session');

mongoose.connect('mongodb://chris12:12chris@ds155315.mlab.com:55315/variantz-development');

//mongoose.connect(config.mongoUrlProduction)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
  });

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(passport.initialize());
app.use(passport.session({
  resave: false,
  saveUninitialized: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));