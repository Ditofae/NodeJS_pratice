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

app.get('/hello/:position/:name/:age', function(req, res) {
    res.send(`<h1>Hello, ${req.params.name}, wellcome</h1> 
              <h2>Your position is ${req.params.position}</h2>
              <p>Your age is: ${req.params.age}</p>`
            );
});

app.listen(8081, function(){
    console.log("Server running on URL http://localhost:8081");
});
//localhost:8081