const http = require('http');

const port = 8081;

http.createServer(function(req, res) {
    console.log('server listen on 8081');
}).listen(port);