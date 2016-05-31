var express = require('express');
var router = express.Router();

// Database connection
var mysql = require('mysql');
var connection = require('../db');


router
  // list all students
  .get('/', function(req, res, next) {
    connection.query('SELECT * from students', function(err, rows) {
      res.json(rows);
    });
  })

  // select student by id
  .get('/:id', function(req, res, next) {
    student_id = req.params.id;
    connection.query('SELECT * from students WHERE id = ?', [student_id],  function(err, rows) {
      res.json(rows);
    });
  })

  // insert new student
  .post('/', function(req, res, next) {
    student = req.body;
    connection.query('INSERT INTO students SET ?', [student], function(err, result) {
      res.json(result);
    });
  })

  // update student
  .put('/:id', function(req, res, next) {
    student_id = req.params.id;
    updated_student = req.body;
    query = 'UPDATE students SET ? WHERE id = ?';
    connection.query(query, [updated_student, student_id], function(err, result) {
      res.json(result);
    });
  })

  // delete student
  .delete('/:id', function(req, res, next) {
    student_id = req.params.id;
    connection.query('DELETE FROM students WHERE id = ?', [student_id], function (err, result) {
        res.json(result);
    });
  });


module.exports = router;
