var express = require('express');
var router = express.Router();
var extsql = require('sqlwork.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Актированные дни' });
  var to = req.query.town;
  var cl = req.query.class;
  var sm = req.query.smena;
  extsql.sqlwork(to,cl,sm);
  console.log(to,cl,sm);
});

module.exports = router;
