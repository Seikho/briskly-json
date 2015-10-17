var path = require('path');
var json = null;
var jsonPath = path.join(process.env.PWD, 'briskly.json');
try {
    json = require(jsonPath);
}
catch (ex) {
}
module.exports = {
    json: json,
    path: jsonPath
};
