var path = require('path');
exports.json = null;
var jsonPath = path.join(process.env.PWD, 'briskly.json');
try {
    exports.json = require(jsonPath);
}
catch (ex) {
}
