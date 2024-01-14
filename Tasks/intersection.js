// Find an intersection of two dictionaries
'use strict';

const intersection = function(object1, object2) {
  for (const keys of Object.keys(object1)) {
    if (object1[keys] === object2[keys]) {
      object2[keys] = object1[keys];
    } else {
      delete object1[keys];
    }
  }
  return object1;
};

module.exports = intersection;
