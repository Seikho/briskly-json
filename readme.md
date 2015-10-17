### briskly-json
Find and parse `briskly.json` in Briskly projects

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