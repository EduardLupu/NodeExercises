const path = require('path');
const fs = require('fs');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, 'utf8', (err, data) => {
        if (err) {
            return callback(err, null);
        } else {
            const files = data.filter(file => path.extname(file) === `.${ext}`);
            return callback(null, files);
        }
    });
}
