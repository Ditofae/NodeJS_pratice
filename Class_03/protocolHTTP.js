var http = require('http');

http.createServer(function(req, res) {
    res.end('Hellor World!! Wellcome to my website');
}).listen(8081);

console.log('The server is running');