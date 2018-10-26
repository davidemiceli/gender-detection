'use strict';

// Requirements
const male = require('./genders/male');
const female = require('./genders/female');

// Match gender type from the first name
const getGender = function(firstName, lang) {
  if (lang && male[firstName] && male[firstName][lang] && female[firstName] && female[firstName][lang]) {
    return 'unisex';
  } else if (lang && male[firstName] && male[firstName][lang]) {
    return 'male';
  } else if (lang && female[firstName] && female[firstName][lang]) {
    return 'female';
  } else if (male[firstName] && female[firstName]) {
    return 'unisex';
  } else if (male[firstName]) {
    return 'male';
  } else if (female[firstName]) {
    return 'female';
  }
  return 'unknown';
}

// Extract the first name from a full name string
const getFirstNameFromFullName = function(fullName) {
  return fullName
    .toLowerCase()
    .replace(/^\s+|^0-9+|[^a-z-úñäâàáéèëêïîöôùüûœç\- ]+/g, '')
    .split(/\s/)[0];
}

// Detect gender
exports.detect = function(fullName, lang) {
  const firstName = getFirstNameFromFullName(fullName);
  const resgender = getGender(firstName, lang);
  return resgender;
}

// Export getFirstNameFromFullName function
exports.getFirstName = getFirstNameFromFullName;
