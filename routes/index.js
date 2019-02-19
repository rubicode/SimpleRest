var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/token', function(req, res, next) {
  let token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: {nama : "Superman"}
  }, 'belajarREST');
  res.send(token);
});

router.get('/verify/:token', function(req, res, next) {
  jwt.verify(req.params.token, 'belajarREST', function(err, decoded) {
    res.json({err,decoded});
  });
});

module.exports = router;
