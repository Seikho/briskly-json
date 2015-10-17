import fs = require('fs');
import path = require('path');
export var json = null;

var jsonPath = path.join(process.env.PWD, 'briskly.json');

try {
    json = require(jsonPath);
}
catch (ex) {
    // NOOP, check for !json in userland
}