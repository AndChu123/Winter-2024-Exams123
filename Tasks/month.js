// Get month number
'use strict';

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const monthNumber = (input) => {
  const lowerInput = input.toLowerCase();
  const index = months.findIndex((month) => lowerInput.startsWith(month));
  if (input.toLowerCase().startsWith(months[index])) {
    return index + 1;
  }
  return -1;
};
module.exports = monthNumber;
