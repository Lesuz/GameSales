const request = require("request");
var express = require('express');
var app = express();
var data;

const PORT = process.env.PORT || 3000;

request (
    "https://www.cheapshark.com/api/1.0/deals",
    {json: true},
    (err, res, body) => {
        if(err) {
            return console.log(err)
        }
        body.sort(function(a,b) {
            if(a.title < b.title) { return -1;}
            if(a.title > b.title) { return 1;}
        })
        data = body;
        console.log(data);
    }
);

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
})

app.get('/steamsales', function(req, res) {
    res.render('pages/steamsales', {data:data})
})

app.listen(PORT);