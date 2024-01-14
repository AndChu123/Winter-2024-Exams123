// Reverse an array, you can't use .reverse()
'use strict';

const invert = (sourceArray) => {
  const keysCopy = [...Object.keys(sourceArray)];
  keysCopy.forEach((_, i) => {
    keysCopy[i] = sourceArray.pop();
  });
  return keysCopy;
};
module.exports = invert;
