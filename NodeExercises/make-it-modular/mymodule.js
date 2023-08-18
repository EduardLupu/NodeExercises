var path = require('path');
var fs = require('fs');
module.exports = function (dir, ext, callback) {
    fs.readdir(dir, 'utf8', function (err, data) {
        if (err) {
            return callback(err, null);
        }
        else {
            var files = data.filter(function (file) { return path.extname(file) === ".".concat(ext); });
            return callback(null, files);
        }
    });
};
