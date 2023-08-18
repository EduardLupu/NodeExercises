"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var callback = function (err, data) {
    if (err) {
        console.error(err);
    }
    else {
        var ext_1 = process.argv[3];
        var files = data.filter(function (file) { return path.extname(file) === ".".concat(ext_1); });
        files.forEach(function (file) { return console.log(file); });
    }
};
fs.readdir(process.argv[2], 'utf8', callback);
