var express = require('express');
var router = express.Router();

// BREAD ROUTES

// BROWSE GET
router.get('/', async(req, res) => {
  try {
    res.send('respond with a resource');
  } catch (error) {

  }
});

// READ GET
router.get('/:id', async(req, res) => {
  try {
    res.send('respond with a resource');
  } catch (error) {

  }
});

// EDIT PUT
router.get('/:id', async(req, res) => {
  try {
    res.send('respond with a resource');
  } catch (error) {

  }
});

// ADD POST
router.get('/', async(req, res) => {
  try {
    res.send('respond with a resource');
  } catch (error) {

  }
});

// DELETE DELETE
router.delete('/:id', async(req, res) => {
  try {
    res.send('respond with a resource');
  } catch (error) {

  }
});

module.exports = router;
