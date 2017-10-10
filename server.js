var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'ejs');

app.get('/pokemon', function(req, res) {
  fs.readFile('pokemon_list.js', function(err, data) {
    res.render('index', data);
  });
});

app.listen(8000, function() {
  console.log("Listening on server port 8000...");
});
