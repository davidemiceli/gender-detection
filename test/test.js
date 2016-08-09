/*
 * If you want run tests please install the test framework Mocha (https://mochajs.org).
 * Then type the command on the parent folder: mocha test
 */

// Require assert mocha
var assert = require('assert');

// Require gender detection module
var gender = require('../index.js');

describe('Simple names', function() {
    it('It should return male, female, or unknown', function() {
        assert.equal('male', gender.detect('John','en'));
        assert.equal('female', gender.detect('Holly'));
    });
});

describe('Double names', function() {
    it('It should return male, female, or unknown', function() {
        assert.equal('male', gender.detect('Tim Johnson'));
        assert.equal('female', gender.detect('Francesca Rossi'));
    });
});

describe('Bad formatted names', function() {
    it('It should return male, female, or unknown', function() {
        assert.equal('male', gender.detect('BiLL$...'));
        assert.equal('female', gender.detect('::Jenni♥fer::'));
    });
});

describe('Simple names with languages variable', function() {
    it('It should return male, female, or unknown', function() {
        assert.equal('male', gender.detect('Johnny','en'));
        assert.equal('male', gender.detect('Andrea','it'));
        assert.equal('unisex', gender.detect('Andrea','hgjj'));
    });
});
