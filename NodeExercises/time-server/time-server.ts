const net = require('net');

const server = net.createServer((socket) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // starts at 0
    const day = date.getDate(); // returns the day of month
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}\n`;
    socket.end(formattedDate);
});

server.listen(process.argv[2]);