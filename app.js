var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var students = require('./routes/students');
var courses = require('./routes/courses');
var results = require('./routes/results');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/students', students);
app.use('/courses', courses);
app.use('/results', results);

// catch 404
app.use(function(req, res, next) {
  var err = {"error" : "Page not found"};
  err.status = 404;
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
