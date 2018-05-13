let express = require('express');
let router = express.Router();
let passport = require('passport');
let path = require('path');

router.get('/',
  (req, res, next) => res.render(path.join(__dirname, "views/home"), { /*USER ID*/id: req.session.user,
    title: "title", element2:"Event2",element3: "event3"})

);

module.exports = router;
