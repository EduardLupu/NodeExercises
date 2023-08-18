var httpClient = require('http');
httpClient.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    var data = '';
    response.on('data', function (chunk) { return data += chunk; });
    response.on('end', function () {
        console.log(data.length);
        console.log(data);
    });
}, console.error);
