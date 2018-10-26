'use strict';

// Require assert mocha
const assert = require('assert');

// Require gender detection module
const gender = require('../index.js');

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

describe('First names', function() {
    it('It should return the first name', function() {
      assert.equal('mario', gender.getFirstName('Mario'));
      assert.equal('karl', gender.getFirstName('Karl Callagan'));
      assert.equal('francesca', gender.getFirstName('Francesca Chiara Rossi'));
      assert.equal('ludwig', gender.getFirstName('Ludwig van Beethoven'));
    });
  });
