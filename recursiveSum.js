const sum = function (array) {
  return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
};
