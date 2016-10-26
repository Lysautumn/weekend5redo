var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var faves = require('./routes/fav');

var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use('/fav', faves);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(port, function() {
  console.log('Listening on port ', port);
});
