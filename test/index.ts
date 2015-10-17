import fs = require('fs');
import chai = require('chai');
import path = require('path');
import brisklyJson = require('../src');

var expect = chai.expect;

describe('json fetch tests', () => {
   
   it('will return an empty object with briskly.json is not found', () => {
       deleteJson();
       var json = brisklyJson.json;
       expect(Object.keys(json)).to.be.empty;
   });
   
   it('will return the briskly.json object when it is found', () => {
      createJson();
      var json = brisklyJson.json;
      expect(json.port).to.equal(80);
      expect(json.routes).to.exist;
      expect(json.components).to.exist; 
   });
    
});

function createJson() {

    var json = {
        port: 80,
        routes: [],
        components: []
    };

    try {
        // If this succeeds, we do nothing
        fs.readFileSync(brisklyJson.path);
    }
    catch (ex) {
        // briskly.json probably doesn't exist. create it.
        fs.writeFileSync(brisklyJson.path, JSON.stringify(json));
    }
}

function deleteJson() {
    
    try {
        // If this succeeds, it should be gone
        fs.unlinkSync(brisklyJson.path)
    }
    catch (ex) {
        // NOOP, the file probably doesn't exist already.
    }
    
}