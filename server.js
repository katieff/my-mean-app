/**
 * Created by ferstlk on 11.10.2015.
 */

// modules =================================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// config ==================================

var db = require('./config/db');

var port = process.env.PORT || 8080;

// connect to mongo db
mongoose.connect(db.url);

app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

// routes ===================================
require('./app/routes')(app);

// start app ================================
app.listen(port);

console.log('Magic happens on port ' + port);
exports = module.exports = app;