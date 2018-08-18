const commafy = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const formatNumber = (num, dp = 1) => commafy(num.toFixed(dp));

export const pluralise = (word, amount) => `${word}${amount === 1 ? '' : 's'}`;

export const flattenDeep = arr =>
  arr.reduce((acc, val) =>
    (Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)), []);

