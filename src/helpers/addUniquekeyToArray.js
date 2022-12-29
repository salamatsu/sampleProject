export const addUniquekeyToArray = (arr, uniqueKey) =>
  arr.map((obj) => ({ ...obj, key: obj[uniqueKey] }));
