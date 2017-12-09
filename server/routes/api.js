const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var FitbitStrategy = require('./lib').FitbitOAuth2Strategy;
var passport = require('passport');

var request = require('request');

var fitBitService = require('../service/fitBitService');


var FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;


// passport.use(new FitbitStrategy({
//         clientID:     '22CKGJ',
//         clientSecret: '8786fc39bae197c08ca96acbab4ed7cf',
//         callbackURL: "http://localhost:4200/api/fitbit/callback"
//       },
//       function(accessToken, refreshToken, profile, done) {
//         console.log("the accessToken is", accessToken);
//         return accessToken;
//       }
//     ));
// Connect
// const connection = (closure) => {
//     return MongoClient.connect('mongodb://chris12:12chris@ds155315.mlab.com:55315/variantz-development', (err, db) => {
//         if (err) return console.log(err);

//         closure(db);
//     });
// };

// var fitbitAuthenticate = passport.authenticate('fitbit', {
//   successRedirect: '/auth/fitbit/success',
//   failureRedirect: '/auth/fitbit/failure'
// });



// router.get('/api/fitbit/success', function(req, res, next) {
//   res.send(req.user);
// });


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
// router.get('/users', (req, res) => {
//     connection((db) => {
//         db.collection('users')
//             .find()
//             .toArray()
//             .then((users) => {
//                 response.data = users;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
// });


router.get("/variantz", function(req, res){
    console.log("hellooooo");
})

router.get("/getFitbitAccessToken/:params", function(req, res){

    window.
    request({url:'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22CKGJ&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fapi%2Ffitbit%2Fcallback&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800', followRedirect:false}, function(err, response, body){
    })
})

router.get('/fitbit/callback/:params', function(req, res){
    console.log("second layer of callback");
    console.log(req.params.params);
})

router.get('/fitbit/callback*', function(req, res){
    res.render("window");
});

router.get('/weather', function(req, res){
    console.log('hitting weather api');
    request({
        url:'http://api.nea.gov.sg/api/WebAPI/?dataset=2hr_nowcast&keyref=781CF461BB6606ADEA01E0CAF8B35274FF91C003867CEC19/1.3295517,103.9036256',
        method: 'GET'
    }, function(err, response){
        if(err) {console.log('errrrr');}
        console.log(response);
        return response;
    })
})


// router.route('/getFitbitAccessToken/:params')
// 	.get(fitBitService.getFitbitAccessToken)

module.exports = router;