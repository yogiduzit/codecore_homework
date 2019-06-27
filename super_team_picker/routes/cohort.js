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
  .select('cohort_name', 'members.name', "imgURL")
  .from('members')
  .innerJoin('cohorts', 'members.cohort_name', 'cohorts.name')
  .then(allMembersWithCohorts => {
    const orderedCohorts = {};

    let i = 0;
    for (let member of allMembersWithCohorts) {
      if (!orderedCohorts[member.cohort_name]) {
        orderedCohorts[member.cohort_name] = {members: [member.name], imgURL: member.imgURL};
      } else {
        orderedCohorts[member.cohort_name]["members"].push(member.name);
      }
      
      if (i == allMembersWithCohorts.length - 1) {
        res.render('pages/cohorts', {orderedCohorts});
      }
      i += 1; 
    }
    
  });
});

router.get('/:id', (req, res) => {
  knex
  .select('cohort_name', 'members.name', "imgURL")
  .from('members')
  .where('cohorts.id', req.params.id)
  .innerJoin('cohorts', 'members.cohort_name', 'cohorts.name')
  .then(cohortMembers => {
    const cohort = {
      members: []
    };
    let i = 0;
    for (let member of cohortMembers) {
      cohort["members"].push(member.name);
      
      if (i == cohortMembers.length - 1) {
        cohort["imgURL"] = member.imgURL;
        cohort["cohortName"] = member.cohort_name;

        res.send("<div>Hi</div>");
        
      }
      i += 1;
    }

    
  });
})

module.exports = router;
