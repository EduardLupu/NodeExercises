const httpClient = require('http');

const server = httpClient.createServer((request, response) => {
    if (request.method === 'GET') {
        if (request.url.includes('/api/parsetime')) {
            const time = new Date(request.url.split('=')[1]);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({
                hour: time.getHours(),
                minute: time.getMinutes(),
                second: time.getSeconds()
            }));
        }
        else if (request.url.includes('/api/unixtime')) {
            const time = new Date(request.url.split('=')[1]);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({
                unixtime: time.getTime()
            }));
        }
    }
});

server.listen(process.argv[2]);