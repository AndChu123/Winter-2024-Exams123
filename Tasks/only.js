// Copy only listed values from dict
'use strict';

const onlyListedValues = (values, ...listedValues) => {
  const X = Object.keys(values);
  X.forEach((Z) => {
    if (!listedValues.includes(Z)) {
      delete values[Z];
    }
  });
  return values;
};

module.exports = onlyListedValues;
