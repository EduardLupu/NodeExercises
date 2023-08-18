const myModule = require('./mymodule');

myModule(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        console.error(err);
    } else {
        data.forEach(file => console.log(file));
    }
});
