// Copy only listed values from dict
'use strict';

const onlyListedValues = (values, ...listedValues) => {
  const keys = Object.keys(values);

  for (const key of keys) {
    if (!listedValues.includes(key)) {
      delete values[key];
    }
  }

  return values;
};

module.exports = onlyListedValues;
