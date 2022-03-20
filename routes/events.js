var express = require('express');
var router = express.Router();

// BREAD ROUTES

// BROWSE GET
router.get('/', async(req, res) => {
  res.send('respond with a resource');
});

// READ GET
router.get('/:id', async(req, res) => {
  res.send('respond with a resource');
});

// EDIT PUT
router.get('/:id', async(req, res) => {
  res.send('respond with a resource');
});

// ADD POST
router.get('/', async(req, res) => {
  res.send('respond with a resource');
});

// DELETE DELETE
router.delete('/:id', async(req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
