var fs = require('fs');
var path = require('path');
var api = {
    json: null,
    path: path.join(process.cwd(), 'briskly.json')
};
Object.defineProperty(api, 'json', {
    get: function () {
        try {
            var json = fs.readFileSync(api.path).toString();
            return JSON.parse(json);
        }
        catch (ex) {
            return {};
        }
    }
});
module.exports = api;
