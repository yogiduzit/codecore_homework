const express = require('express');
const knex = require('../db/client');

const router = express.Router();

router.use(express.urlencoded({extended: true}));

// Get /new - Create a new cohort page
router.get('/new', (req, res) => {
  res.render('pages/new');
});

// POST /new - Post the new cohort data
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

//
router.get('/', (req, res) => {
  knex
  .select('cohort_name', 'members.name')
  .from('members')
  .innerJoin('cohorts', 'members.cohort_name', 'cohorts.name')
  .then(allMembersWithCohorts => {
    const orderedMembers = {};
    for (let member of allMembersWithCohorts) {
      if (!orderedMembers[member.cohort_name]) {
        orderedMembers[member.cohort_name] = [member.name];
      } else {
        orderedMembers[member.cohort_name].push(member.name);
      }
    }
    res.render('pages/cohorts', orderedMembers);
  });
});

module.exports = router;
