const httpClient = require('http');

const server = httpClient.createServer((request, response) => {
    if (request.method === 'POST') {
        request.setEncoding('utf8');
        request.on('data', (chunk) => response.write(chunk.toUpperCase()));
        request.on('end', () => response.end());
    }
});

server.listen(process.argv[2]);