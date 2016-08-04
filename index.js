var male = require('./genders/male');
var female = require('./genders/female');

exports.detect = function(fullName, lang) {
  var firstName = getFirstNameFromFullName(fullName);
  firstName = firstName.toLowerCase();
  resgender = getGender(firstName, lang);
  return resgender;
}

function getGender(firstName, lang) {
    gender = 'unknown';
    if (lang && male[firstName][lang] && female[firstName][lang]) {
        gender = 'unisex';
    } else if (lang && male[firstName][lang]) {
        gender = 'male';
    } else if (lang && female[firstName][lang]) {
        gender = 'female';
    } else if (male[firstName] && female[firstName]) {
        gender = 'unisex';
    } else if (male[firstName]) {
        gender = 'male';
    } else if (female[firstName]) {
        gender = 'female';
    }
    return gender;
}

function getFirstNameFromFullName(fullName) {
  var commaIndex = fullName.indexOf(',');
  if (commaIndex >= 0) {
    fullName = fullName.split(/,(.+)/)[1].trim();
  }
  return fullName.split(/\s/)[0];
}
