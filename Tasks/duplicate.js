// Return an array without duplicates
'use strict';

duplicate = (value, N) => {
  if (N <= 0) return [];
  else {
    res = [];
    for (let i = 0; i < N; i++) {
      res[i] = value;
    }
    return res;
  }
};

module.exports = duplicate;
