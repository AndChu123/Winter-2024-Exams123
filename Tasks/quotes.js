// Change double quotation to open or close quotation
'use strict';

const EMPTY = '';

const quotes = function (inputStr) {
  const result = [];
  let isOpenQuote = false;

  for (const currentChar of inputStr) {
    if (currentChar === '"') {
      result.push(isOpenQuote ? '»' : '«');
      isOpenQuote = !isOpenQuote;
    } else {
      result.push(currentChar);
    }
  }
  return result.join(EMPTY);
};

module.exports = quotes;
