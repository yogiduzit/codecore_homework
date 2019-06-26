const express = require('express');
const knex = require('../db/client');

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<div>Hi</div>");
});

module.exports = router;
