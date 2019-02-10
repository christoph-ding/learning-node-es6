var express = require('express');
var router = express.Router();

/* GET users listing. */
// a callback invoked whenever an HTTP GET request with the correct pattern is detected

router.get('/', function(req, res, next) {
  // the callback function has the third argument 'next', and is hence a middleware function rather than a simple route callback
  res.send('respond with a resource');
});

// this is what allows the file to be imported into app.js
module.exports = router;
