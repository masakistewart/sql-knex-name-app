var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
require('locus');

// For index
router.get('/',function(req,res) {
	knex('users').then(function(data) {
		res.locals.tableData = data;
		console.log(data)
		res.render("pages/index");
	})
});

// For new User
router.get('/new',function(req,res) {
  res.render('pages/new');
});

// For New User
router.post('/',function(req,res) {
	var name = req.body.userName;
	console.log(name);
	knex('users').insert({name: name}).then(function(data){
		console.log('----' + data)
		res.redirect('/users');
	}).catch(function(err){
		console.log(err);
	});
});

// for Delete
router.get('/delete',function(req,res) { 
  
 });

module.exports = router;