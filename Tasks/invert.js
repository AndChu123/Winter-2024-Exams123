// Reverse an array, you can't use .reverse()
'use strict';

const invert = (sourceArray) => {
  const keysCopy = [...Object.keys(sourceArray)];
  for (const keys of keysCopy) {
    keysCopy[keysCopy.indexOf(keys)] = sourceArray.pop();
  }
  return keysCopy;
};
module.exports = invert;
