var net = require('net');
var server = net.createServer(function (socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // starts at 0
    var day = date.getDate(); // returns the day of month
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var formattedDate = "".concat(year, "-").concat(month < 10 ? '0' + month : month, "-").concat(day < 10 ? '0' + day : day, " ").concat(hours < 10 ? '0' + hours : hours, ":").concat(minutes < 10 ? '0' + minutes : minutes, "\n");
    socket.end(formattedDate);
});
server.listen(process.argv[2]);
