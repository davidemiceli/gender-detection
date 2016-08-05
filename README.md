# Gender Detection

## Description
A node.js module to determine a person's gender based on his/her first name.  
It works also for many languages other than english. It support international names.  
This module is able to clean the text detecting gender from dirty or unclear names.

## Installation

    $ npm install gender-detection

Or using github:

    $ npm install git+https://git@github.com/davidemiceli/gender-detection.git

## Example
```javascript
// Require gender detection module
var gender = require('gender-detection');

// Use it to detect the gender:
g = gender.detect('Tim Johnson');
// "male"

g = gender.detect('Holly');
// "female"

g = gender.detect('GhJGhgj')
// "unknown"

// It works also with unclean or dirty names:
g = gender.detect('BiLL$...');
// "male"

g = gender.detect('::Jenni♥fer::');
// "female"
```

### Tests

In case you want to run some tests, please install the test framework Mocha (https://mochajs.org)  
After installing it, on the parent directory type: `mocha test`.
The test directory is obviously `/test`.
