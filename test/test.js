// Require gender detection module
var gender = require('../index.js');

// Use it to detect the gender:
g = gender.detect('Tim Johnson');
console.log(g);

g = gender.detect('Holly');
console.log(g);

g = gender.detect('GhJGhgj');
console.log(g);