import fs = require('fs');
import path = require('path');

const callback = (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const ext = process.argv[3];
        const files = data.filter(file => path.extname(file) === `.${ext}`);
        files.forEach(file => console.log(file));
    }
}

fs.readdir(process.argv[2], 'utf8', callback);