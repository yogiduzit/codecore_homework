const express = require('express');
const knex = require('../db/client');

const router = express.Router();

router.use(express.urlencoded({extended: true}));

router.get('/new', (req, res) => {
  res.render('pages/new');
});

router.post('/new', (req, res) => {
  knex
  .insert({
    imgURL: req.body.imgURL,
    name: req.body.cohortName
  })
  .into('cohorts')
  .returning('*')
  .then(([cohort]) => {
    for (let member of req.body.members.split(', ')) {
      knex
      .insert({
        name: member,
        cohort_name: req.body.cohortName
      })
      .into('members')
      .returning('*')
      .then(([member]) => {
        
      });
    }
    res.redirect('/cohorts');
  });


  
});
router.get('/', (req, res) => {
  res.send('<div>Cohorts</div>')
})

module.exports = router;
