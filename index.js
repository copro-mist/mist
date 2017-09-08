var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello mist!');
});

app.listen(3000, function () {
  console.log('mist backend läuft...');
});