var express = require('express');
var router = express.Router();

router.get('/users',function(req,res) {
	knex('users')
	res.render("index");
});

modules.exports = router;