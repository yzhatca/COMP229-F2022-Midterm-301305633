// Name: Zhihao Yu
// ID: 301305633
// index routes 

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
