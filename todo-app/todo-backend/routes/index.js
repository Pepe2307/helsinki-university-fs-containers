const express = require('express');
const router = express.Router();
const { get } = require('../redis');
const configs = require('../util/config')

let visits = 0

router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const count = await get('added_todos');
  res.send({
    "added_todos": Number(count || 0)
  });
});

module.exports = router;
