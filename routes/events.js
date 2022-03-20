var express = require('express');
var router = express.Router();
const db = require('../bin/db')

// BREAD ROUTES

// BROWSE GET
router.get('/', async(req, res) => {
  try {
    const query = {
      text: 'SELECT * FROM events;',
    };
    const dbResponse = await db.query(query);
    res.json(dbResponse.rows)
  } catch (error) {

  }
});

// READ GET
router.get('/:id', async(req, res) => {
  try {
    const query = {
      text: 'SELECT * FROM events WHERE id = $1;',
      values: [req.params.id],
    };
    const dbResponse = await db.query(query);
    res.json(dbResponse.rows)
  } catch (error) {

  }
});

// EDIT PUT
router.get('/:id', async(req, res) => {
  try {
    // req.body object destructuring
    const [user_owner, datetime, title, description, location, sport, same_gender, similar_age] = req.body

    const query = {
      text: 'UPDATE events SET user_owner=$1, datetime=$2, title=$3, description=$4, location=$5, sport=$6, same_gender=$7, similar_age=$8 WHERE id=$9 RETURNING *;',
      values: [user_owner, datetime, title, description, location, sport, same_gender, similar_age, req.params.id],
    };
    const dbResponse = await db.query(query);
    res.json(dbResponse.rows)
  } catch (error) {

  }
});

// ADD POST
router.get('/', async(req, res) => {
  try {
    // req.body object destructuring
    const [user_owner, datetime, title, description, location, sport, same_gender, similar_age] = req.body

    const query = {
      text: 'INSERT INTO events (user_owner, datetime, title, description, location, sport, same_gender, similar_age) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;',
      values: [user_owner, datetime, title, description, location, sport, same_gender, similar_age],
    };
    const dbResponse = await db.query(query);
    res.json(dbResponse.rows)
  } catch (error) {

  }
});

// DELETE DELETE
router.delete('/:id', async(req, res) => {
  try {
    const query = {
      text: 'DELETE FROM events WHERE id = $1 RETURNING *;',
      values: [req.params.id],
    };
    const dbResponse = await db.query(query);
    res.json(dbResponse.rows)
  } catch (error) {

  }
});

module.exports = router;
