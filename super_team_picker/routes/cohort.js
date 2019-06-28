const express = require('express');
const knex = require('../db/client');

const router = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.use(express.urlencoded({
  extended: true
}));

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
      for (let member of req.body.members.split(',')) {
        knex
          .insert({
            name: member.trim(),
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
          orderedCohorts[member.cohort_name] = {
            members: [member.name],
            imgURL: member.imgURL
          };
        } else {
          orderedCohorts[member.cohort_name]["members"].push(member.name);
        }

        if (i == allMembersWithCohorts.length - 1) {
          
          res.render('pages/cohorts', {
            orderedCohorts
          });
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
          cohort["cohortName"] = member.cohort_name;
          cohort["id"] = req.params.id;

          if (req.cookies.request) {
          let request = JSON.parse(req.cookies.request);
          let teams; 
          switch(request.option) {
            case "teamCount":
              teams = teamCount(request.quantity, randomize(cohort["members"]));
            break;
            case "numPerTeams":
              teams = numPerTeams(request.quantity, randomize(cohort["members"]));
            break;
          }

          console.log(teams);
          res.clearCookie("request");
          res.render('pages/cohort', {
            cohort, 
            request,
            teams
          });
        } else {
          res.render('pages/cohort', {
            cohort,
            request: undefined,
            teams: undefined
          });
        }
        
        }
        i += 1;
      }
    });
});

router.post('/:id', (req, res) => {
 

  res.cookie("request", JSON.stringify(req.body));
  res.redirect('/cohorts/' + req.params.id);
});

function teamCount(totalTeams, students) {
  const orderedTeams = {};

  const remainMems = students.length % totalTeams;
  const memsPerTeam = Math.floor(students.length / totalTeams);

  for (let i = 0; i < totalTeams; i++) {
    orderedTeams[i.toString()] = [];
    for (let j = 0; j < memsPerTeam; j++) {
      orderedTeams[i.toString()].push(students[i * memsPerTeam + j]);
    }
  }
  for (let i = remainMems; i > 0; i--) {
    orderedTeams[i.toString()].push(students[students.length - i]);
  }
  return orderedTeams;
}

function numPerTeams(perTeam, students) {
  const orderedTeams = {};

  const totalTeams = Math.floor(students.length / perTeam);
  const remainMems = students.length % perTeam;

  for (let i = 0; i < totalTeams; i++) {
    orderedTeams[i.toString()] = [];
    for (let j = 0; j < perTeam; j++) {
      if (students[i * perTeam + j]) {
        orderedTeams[i.toString()].push(students[i * perTeam + j]);
      }
    }
  }
  if (remainMems > totalTeams) {
    orderedTeams[totalTeams.toString()] = [];
    for (let i = remainMems; i >= 1; i--) {
      orderedTeams[totalTeams.toString()].push(students[students.length - i])
    }
  } else {
    for (let i = remainMems; i >= 1; i--) {
      //orderedTeams[(remainMems - i - 1).toString()].push(students[students.length - i]);
      console.log(remainMems - i);
    }
  }
  return orderedTeams;
}

function randomize(arr) {
  const newArr = arr.slice(0);
  for (let i = 0; i < newArr.length; i++) {
    let randomIndex = Math.floor(Math.random() * i);
    let tempValue = newArr[i];

    newArr[i] = newArr[randomIndex];
    newArr[randomIndex] = tempValue;
  }
  return newArr;
}

module.exports = router;