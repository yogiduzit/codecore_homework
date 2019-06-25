const express = require('express');
const knex = require('../db/client');
const router = express.Router();

// GET notes/new
router.get('/new', (req, res) => {
  res.render('notes/new');
});

// POST notes/
router.post('/', (req, res) => {
  knex
  .insert({
    title: req.body.title,
    body: req.body.body
  })
  .into('notes')
  .returning('*')
  .then(([note]) => {
    res.redirect('/notes')
  });
});

// GET notes/
router.get('/', (req, res) => {
  knex
  .select("*")
  .from("notes")
  .orderBy("createdAt", "DESC")
  .then(notes => {
    res.render("notes/index", {notes: notes});
  });
});

// SHOW note
// GET /notes:id
router.get('/:id', (req, res) => {
  const noteId = req.params.id;
  knex('notes')
  .where("id", noteId)
  .first()
  .then((note) => {
    if (note) {
      res.render("notes/show", {note: note});
    } else {
      res.send(`<div>Cannot find note with id=${noteId}</div>`);
    }
  })
});

// DELETE note
// DELETE notes/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  knex('notes')
  .where('id', id)
  .del()
  .then(() => {
    res.redirect("/notes");
  });
});

// EDIT note
// GET note/:id/edit
/* Opens up an existing note. The form for this note has a patch request on it
 * which is detected upon pressing submit and the values are updated */

router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  knex('notes')
  .where('id', id)
  .first()
  .then(note => {
    res.render('notes/edit', {note});
  });
});

// PATCH note
// PATCH /notes/:id

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const {title, body} = req.body;
  const newNote = {title, body};
  knex('notes')
  .where('id', id)
  .update(newNote)
  .returning('*')
  .then(updatedRows => {
    /** update method without a returning method returns a string containing the 
     *  no. of records that were updated.
     *  If returning statement is chained, it returns an array containing all the 
     *  modified objects.
     */ 

    if (updatedRows.length) {
      res.render('notes/show', {note: updatedRows[0]});
    } else {
      res.send('<div>Error occured please refresh page</div>');
    }
  });
});

module.exports = router;