var express = require('express');
var router = express.Router();
var extsql = require('../sqlwork.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  var to = req.query.town;
  var cl = req.query.class;
  var sm = req.query.smena;
  if ((to != null)&&(cl != null)&&(sm != null)){
//    console.log(to,cl,sm);
    extsql.addAct(to,cl,sm);
  };
  var rows = extsql.selectData();
  console.log(rows);
  res.render('index', { title: 'Актированные дни',data: rows });
  //console.log(to,cl,sm);
});

module.exports = router;

