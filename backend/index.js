var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello mist!');
  console.log(req.param);
});

app.post('/', (req, res)=> {
    console.log(req.params);
});

app.get('/newentry', (req, res) => {
    res.send('NEUER EINTRAG WURDE GEMACHT');
});

app.listen(3000, function () {
  console.log('mist backend läuft...');
});