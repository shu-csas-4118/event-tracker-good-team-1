var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('searchViews/search', { title: 'Express2', mytitle:req.query.search});
  
});

module.exports = router;
