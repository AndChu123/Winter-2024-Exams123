// Return an array without duplicates
'use strict';

const removeDuplicates = (inputArray) => {
  const uniqueSet = new Set();
  let currentIndex = 0;

  for (const element of inputArray) {
    if (uniqueSet.has(element)) {
      delete inputArray[currentIndex];
    } else {
      uniqueSet.add(element);
    }
    currentIndex++;
  }

  return inputArray.filter((value) => typeof value === 'number');
};

module.exports = removeDuplicates;
