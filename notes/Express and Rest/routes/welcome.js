const express = require('express');

/* A mini-application capable of performing only routing
 *  and middleware functions. It helps in dividing the whole application into modules.
 * All the routers are in the end required in the app.js file.
 */
const router = express.Router(); 

router.get('/', (req, res) => {
  res.render('welcome/index');
});

module.exports = router;
