var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
  database: 'rho',
};

var pool = new pg.Pool(config);

router.get('/', function(req, res) {
  pool.connect(function(err, client, done) {
    if(err) {
      done();
      next(err);
    }
    client.query('SELECT * FROM favorites', function(err, result) {
      done();

      if(err) {
        next(err);
      }
      console.log('Result:', result);
      res.send(result.rows);
    });
  });
});

router.post('/', function(req, res) {
  var fave = req.body;
  pool.connect(function(err, client, done) {
    if(err){
      done();
      next(err);
    }

    client.query('INSERT INTO favorites (url, comment) ' + 'VALUES ($1, $2)', [fave.url, fave.comment], function(err, result) {
      done();
      if(err) {
        next(err);
      }

      res.sendStatus(201);
    });
  });
});

router.use(function(err, req, res) {
  console.log('DB error', err);
  res.sendStatus(500);
});

module.exports = router;
