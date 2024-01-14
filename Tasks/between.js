// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);
  if (prefixIndex === -1) {
    return '';
  } else {
    const k = prefixIndex + prefix.length;
    str = str.substring(k);
    const suffixIndex = str.indexOf(suffix);
    if (suffixIndex === -1) {
      return '';
    } else {
      str = str.substring(0, suffixIndex);
    }
  }
  return str;
};

module.exports = getValueBetween;
