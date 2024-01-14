// Delete listed keys from dictionary
'use strict';

const drop = (dictionary, ...keys) => {
  const dictionaryKeys = Object.keys(dictionary);
  for (const key of dictionaryKeys) {
    if (keys.includes(key)) {
      delete dictionary[key];
    }
  }
  return dictionary;
};

module.exports = drop;
