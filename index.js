var male = require('./genders/male');
var female = require('./genders/female');

exports.detect = function(fullName, lang) {
  var firstName = getFirstNameFromFullName(fullName);
  resgender = getGender(firstName, lang);
  return resgender;
}

function getGender(firstName, lang) {
    gender = 'unknown';
    if (lang && male[firstName] && male[firstName][lang] && female[firstName] && female[firstName][lang]) {
        gender = 'unisex';
    } else if (lang && male[firstName] && male[firstName][lang]) {
        gender = 'male';
    } else if (lang && female[firstName] && female[firstName][lang]) {
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
  fullName = fullName.toLowerCase();
  fullName = fullName.replace(/^\s+|^0-9+|[^a-z-úñäâàáéèëêïîöôùüûœç\- ]+/g, '');
  return fullName.split(/\s/)[0];
}
