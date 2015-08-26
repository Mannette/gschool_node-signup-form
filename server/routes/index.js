var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Node Signup' });
});

router.post('/submit', function (req, res, next) {
  if (req.body.email !== '') {
    res.redirect('/success');
  }

  res.send(req.body.email);
});

router.get('/success', function (req, res, next) {
  res.send('Success!')
});

module.exports = router;
