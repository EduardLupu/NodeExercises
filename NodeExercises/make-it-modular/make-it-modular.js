var myModule = require('./mymodule');
myModule(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
        console.error(err);
    }
    else {
        data.forEach(function (file) { return console.log(file); });
    }
});
