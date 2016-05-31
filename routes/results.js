var express = require('express');
var router = express.Router();

// Database connection
var mysql = require('mysql');
var connection = require('../db');


router
  // list all results with students names and courses titles
  .get('/', function(req, res, next) {
    query = "SELECT results.id, students.name as student_name, courses.title as course_title, results.result FROM results JOIN students ON students.id = results.student_id JOIN courses ON courses.id = results.course_id"
    connection.query(query, function(err, rows) {
      res.json(rows);
    });
  })

  // select result by id
  .get('/:id', function(req, res, next) {
    result_id = req.params.id;
    query = "SELECT results.id, students.name as student_name, courses.title as course_title, results.result FROM results JOIN students ON students.id = results.student_id JOIN courses ON courses.id = results.course_id WHERE results.id = ? "
    connection.query(query, [result_id],  function(err, rows) {
      res.json(rows);
    });
  })

  // insert new result
  .post('/', function(req, res, next) {
    result = req.body;
    connection.query('INSERT INTO results SET ?', [result], function(err, result) {
      res.json(result);
    });
  })

  // update result
  .put('/:id', function(req, res, next) {
    result_id = req.params.id;
    updated_result = req.body;
    query = 'UPDATE results SET ? WHERE id = ?';
    connection.query(query, [updated_result, result_id], function(err, result) {
      res.json(result);
    });
  })

  // delete result
  .delete('/:id', function(req, res, next) {
    result_id = req.params.id;
    connection.query('DELETE FROM results WHERE id = ?', [result_id], function (err, result) {
        res.json(result);
    });
  });


module.exports = router;
