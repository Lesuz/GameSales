const request = require("request");
var express = require('express');
var app = express();
var data;

// Environment chooses which port is being used, or using port 3000 as a localhost
const PORT = process.env.PORT || 3000;

// API call
request (
    "https://www.cheapshark.com/api/1.0/deals",
    {json: true},
    (err, res, body) => {
        if(err) {
            return console.log(err)
        }
        // saving sorted array into new variable
        data = body;
    }
);

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
})

// rendering steamsales page and giving it the gotten data from the API
app.get('/steamsales', function(req, res) {

    // sorting gotten data in an alphabetcal order
    data.sort(function(a,b) {
        if(a.title < b.title) { return -1;}
        if(a.title > b.title) { return 1;}
    })
    
    res.render('pages/steamsales', {data:data})
})

app.listen(PORT);