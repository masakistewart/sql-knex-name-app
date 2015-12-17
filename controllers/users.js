var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
require('locus');


router.get('/',function(req,res) {
	knex('users').then(function(data) {
		res.locals.tableData = data;
		//console.log(data)
		res.render("pages/index");
	})
});


router.get('/new',function(req,res) {
  res.render('pages/new');
});

router.post('/',function(req,res) {
  res.redirect('/users');
  console.log(req.body)
 });

module.exports = router;