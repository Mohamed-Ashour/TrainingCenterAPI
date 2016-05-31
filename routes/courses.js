var express = require('express');
var router = express.Router();

// Database connection
var mysql = require('mysql');
var connection = require('../db');


router
  // list all courses
  .get('/', function(req, res, next) {
    connection.query('SELECT * from courses', function(err, rows) {
      res.json(rows);
    });
  })

  // select course by id
  .get('/:id', function(req, res, next) {
    course_id = req.params.id;
    connection.query('SELECT * from courses WHERE id = ?', [course_id],  function(err, rows) {
      res.json(rows);
    });
  })

  // insert new course
  .post('/', function(req, res, next) {
    course = req.body;
    connection.query('INSERT INTO courses SET ?', [course], function(err, result) {
      res.json(result);
    });
  })

  // update course
  .put('/:id', function(req, res, next) {
    course_id = req.params.id;
    updated_course = req.body;
    query = 'UPDATE courses SET ? WHERE id = ?';
    connection.query(query, [updated_course, course_id], function(err, result) {
      res.json(result);
    });
  })

  // delete course
  .delete('/:id', function(req, res, next) {
    course_id = req.params.id;
    connection.query('DELETE FROM courses WHERE id = ?', [course_id], function (err, result) {
        res.json(result);
    });
  });


module.exports = router;
