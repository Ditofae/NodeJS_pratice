const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Wellcome to my website!!');
});

app.get('/about', function(req, res) {
    res.send('My website is about nothing');
});

app.get('/blog', function(req, res) {
    res.send('Wellcome to my blog, ugly');
});

app.listen(8081, function(){
    console.log("Server running on URL http://localhost:8081");
});
//localhost:8081