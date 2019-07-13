var express = require('express');
var router = express.Router();

var contact = require("../config/database")
/* GET home page. */
router.get('/', function(req, res, next) {
  var query = "SELECT * FROM positions";
contact.query(query,function(error,result){
 res.json(result);
})
 
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'โคตรควาย' });
});

  router.get('/about', function(req, res, next) {
  res.render('about', { title: 'โคตรควาย' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'โคตรควาย' });
});
module.exports = router;
