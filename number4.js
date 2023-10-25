// Number 1

// function checkNesting(array) {
//   let maxDepth = 0;
//   array.forEach((item) => {
//     if (Array.isArray(item)) {
//       let depth = checkNesting(item);
//       console.log(depth);
//       if (depth > maxDepth) {
//         maxDepth = depth;
//       }
//     }
//   });
//   return maxDepth + 1;
// }

// // Flatten helper function
// function flatten (array, n){
//     return array.flat(n - 1)
// }

// const nestings = checkNesting([1, 2, [3, 4, [5, 6]]])

// console.log(flatten([1, 2, [3, 4, [5, 6]]], nestings ))

// Number 2

// const isPrime = (num) => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
//     if (num % i === 0) {
//       console.log(i);
//       return false;
//     }
//   }
//   return num > 1;
// };

// console.log(isPrime(17));



// Number 3

// const sum = function(array) {
//     return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
// }

// console.log(sum([2,3,5]))


// Number 4

// const removeDuplicates = array =>  [...new Set(array)];

// console.log(removeDuplicates([1,2,3,4,4,10,4,4,5,5,2,3,3,4,9,  45,45]))