### briskly-json
Find and parse `briskly.json` in Briskly projects

[![NPM version](http://img.shields.io/npm/v/briskly-json.svg?style=flat)](https://www.npmjs.org/package/briskly-json)
[![Travis build status](https://travis-ci.org/Seikho/briskly-json.svg?branch=master)](https://travis-ci.org/Seikho/briskly-json)

### Installation
```
npm install briskly-json --save
```

### Usage
```javascript
// TypeScript
import BrisklyJson = require('briskly-json');


var config = BrisklyJson.json;
// Returns briskly.json contents as a JavaScript object

var jsonPath = BrisklyJson.path;
// Returns the expected path of briskly.json
```

### License
MIT