var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const todos = require('../db.json')
  res.json(todos)
});
router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
})

module.exports = router;
