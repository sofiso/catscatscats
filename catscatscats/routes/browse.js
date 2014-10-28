var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log("test");
  res.render('browse', { title: 'browse' });
});

module.exports = router;
