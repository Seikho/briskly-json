import Types = require('../index.d.ts');
import fs = require('fs');
import path = require('path');
export = api;

var api = {
    json: <Types.Briskly>null,
    path: path.join(process.env.PWD, 'briskly.json')
}

Object.defineProperty(api, 'json', {
    get: function() {
        try {
            var json = fs.readFileSync(api.path).toString();
            return JSON.parse(json)
        } catch (ex) {
            return {};
        }
    }
});