var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// BREAD ROUTES

// BROWSE GET
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

// READ GET
router.get('/:id', function(req, res) {
  res.send('respond with a resource');
});

// EDIT PUT
router.get('/:id', function(req, res) {
  res.send('respond with a resource');
});

// ADD POST
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

// DELETE DELETE
router.delete('/:id', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
