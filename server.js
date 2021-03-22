var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
})

app.get('/steamsales', function(req, res) {
    res.render('pages/steamsales')
})

app.listen(8081);
console.log("Hi");