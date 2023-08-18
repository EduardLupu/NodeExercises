var httpClient = require('http');
var server = httpClient.createServer(function (request, response) {
    if (request.method === 'GET') {
        if (request.url.includes('/api/parsetime')) {
            var time = new Date(request.url.split('=')[1]);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({
                hour: time.getHours(),
                minute: time.getMinutes(),
                second: time.getSeconds()
            }));
        }
        else if (request.url.includes('/api/unixtime')) {
            var time = new Date(request.url.split('=')[1]);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({
                unixtime: time.getTime()
            }));
        }
    }
});
server.listen(process.argv[2]);
