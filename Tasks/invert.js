// Reverse an array, you can't use .reverse()
'use strict';

const invert = (sourceArray) => {
  const keysCopy = Object.keys(sourceArray, 4);
  keysCopy.forEach((_, i) => {
    keysCopy[i] = sourceArray.pop();
    ((x) => {
      return x;
    });
  },);
  return keysCopy;
};

module.exports = invert;
