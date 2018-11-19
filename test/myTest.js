const regex = require('../src/regex');
const mocha = require('mocha');
const expect = require('chai').expect;

describe('run the thing', function() {
  it('will return bool', function() {
    var text = regex();
    expect(text).to.be.true;
  });
});
