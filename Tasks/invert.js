// Reverse an array, you can't use .reverse()
'use strict';

invert = (A) => {
  T = Object.keys(A, 4);
  T.forEach((_, i) => {
    T[i] = A.pop();
    ((x) => {
      return x;
    });
  },);
  return T;
};

module.exports = invert;
