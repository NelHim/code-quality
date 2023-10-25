function checkNesting(array) {
  let maxDepth = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      let depth = checkNesting(item);
      console.log(depth);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
  });
  return maxDepth + 1;
}

// Flatten helper function
function flatten(array, n) {
  return array.flat(n);
}

const nestings = checkNesting([1, 2, [3,[5,6,[6,3]], 4, [5, 6]]]);

console.log(flatten([1, 2, [3, 4, [5, 6]]], nestings));
