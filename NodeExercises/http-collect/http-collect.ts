const httpClient = require('http');

httpClient.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    let data = '';
    response.on('data', (chunk) => data += chunk);
    response.on('end', () => {
        console.log(data.length);
        console.log(data);
    });
}, console.error);