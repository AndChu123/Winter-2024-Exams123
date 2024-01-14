// Find an intersection of two dictionaries
'use strict';

const intersection = function(object1, object2) {
  const firstKeys = Object.keys(object1);
  for (const keys of firstKeys) {
    if (object1[keys] === object2[keys]) {
      object2[keys] = object1[keys];
    } else {
      delete object1[keys];
    }
  }
  return object1;
};

module.exports = intersection;
