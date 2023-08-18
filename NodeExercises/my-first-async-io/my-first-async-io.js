"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var callback = function (err, data) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(data.toString().split('\n').length - 1);
    }
};
fs.readFile(process.argv[2], 'utf8', callback);
