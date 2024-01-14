// Return an array without duplicates
'use strict';

const duplicate = (value, N) => {
  if (N <= 0){
    return [];
  }
  const array = [];
  array.fill(value, N);
};

module.exports = duplicate;
