// Return an array without duplicates
'use strict';

const removeDuplicates = (inputArray) => {
  const uniqueSet = new Set();
  let currentIndex = 0;
  data.forEach((element) => {
    if (uniqueSet.has(element)) {
      delete inputArray[currentIndex];
    } else {
      uniqueSet.add(element);
    }
    currentIndex++;
  });
  return inputArray.filter
  (x => typeof x === 'number');
};

module.exports = removeDuplicates;
