var httpClient = require('http');
var server = httpClient.createServer(function (request, response) {
    if (request.method === 'POST') {
        request.setEncoding('utf8');
        request.on('data', function (chunk) { return response.write(chunk.toUpperCase()); });
        request.on('end', function () { return response.end(); });
    }
});
server.listen(process.argv[2]);
