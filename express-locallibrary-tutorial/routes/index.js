var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   // that route renders a response using the template "index" passing the template variable "title".
  res.render('index', { title: 'Express' });
});

module.exports = router;
