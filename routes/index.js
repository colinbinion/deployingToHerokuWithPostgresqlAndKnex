var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['production']);

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('amphibians')
  .then(function(results){
    res.render('index', { amphibians: results });
  });
});

module.exports = router;
