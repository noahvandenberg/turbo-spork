var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

// BREAD ROUTES

// BROWSE GET
router.get('/', async(req, res) => {
  try {
    const query = {
      text: 'SELECT * FROM users;',
    };
    const dbResponse = await db.query(query);
  } catch (error) {

  }
});

// READ GET
router.get('/:id', async(req, res) => {
  try {
    const query = {
      text: 'SELECT * FROM users WHERE id = $1;',
      values: [req.params.id],
    };
    const dbResponse = await db.query(query);
  } catch (error) {

  }
});

// EDIT PUT
router.get('/:id', async(req, res) => {
  try {
    // req.body object destructuring
    const [email, name, password, bio, profile_image_url, gender, birthdate, sports, km_range] = req.body

    const query = {
      text: 'UPDATE users SET email=$1, name=$2, password=$3, bio=$4, profile_image_url=$5, gender=$6, birthdate=$7, sports=$8, km_range=$9 WHERE id=$10 RETURNING *;',
      values: [email, name, password, bio, profile_image_url, gender, birthdate, sports, km_range, req.params.id],
    };
    const dbResponse = await db.query(query);
  } catch (error) {

  }
});

// ADD POST
router.get('/', async(req, res) => {
  try {
    // req.body object destructuring
    const [email, name, password, bio, profile_image_url, gender, birthdate, sports, km_range] = req.body

    const query = {
      text: 'INSERT INTO users (email, name, password, bio, profile_image_url, gender, birthdate, sports, km_range) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;',
      values: [email, name, password, bio, profile_image_url, gender, birthdate, sports, km_range],
    };
    const dbResponse = await db.query(query);
  } catch (error) {

  }
});

// DELETE DELETE
router.delete('/:id', async(req, res) => {
  try {
    const query = {
      text: 'DELETE FROM users WHERE id = $1 RETURNING *;',
      values: [req.params.id],
    };
    const dbResponse = await db.query(query);
  } catch (error) {

  }
});

module.exports = router;
