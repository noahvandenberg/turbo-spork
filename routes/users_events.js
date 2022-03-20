var express = require('express');
var router = express.Router();
const db = require('../bin/db')

// BREAD ROUTES

// BROWSE GET
router.get('/', async(req, res) => {
  try {
    const query = {
      text: 'SELECT * FROM users_events;',
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
      text: 'SELECT * FROM users_events WHERE id = $1;',
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
    const [user_id, event_id] = req.body

    const query = {
      text: 'UPDATE users_events SET user_id=$1, event_id=$2 WHERE id=$3 RETURNING *;',
      values: [user_id, event_id, req.params.id],
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
    const [user_id, event_id] = req.body

    const query = {
      text: 'INSERT INTO users_events (user_id, event_id) VALUES ($1, $2) RETURNING *;',
      values: [user_id, event_id],
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
      text: 'DELETE FROM users_events WHERE id = $1 RETURNING *;',
      values: [req.params.id],
    };
    const dbResponse = await db.query(query);
    res.json(dbResponse.rows)
  } catch (error) {

  }
});

module.exports = router;
