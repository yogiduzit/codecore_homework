const express = require('express');
const knex = require('../db/client');

const router = express.Router();

router.use(express.urlencoded({extended: true}));

router.get('/new', (req, res) => {
  res.render('pages/new');
});

router.post('/new', (req, res) => {
  res.redirect('/cohorts');
});
router.get('/', (req, res) => {
  res.send('<div>Cohorts</div>')
})

module.exports = router;
