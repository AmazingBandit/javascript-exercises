// const add = function(x,y) {
// 	// return x+y;
// };

// const subtract = function(x,y) {
// 	// return x-y;
// };

// const sum = function(array) {
//   // if(array.length == 0) {
//   //   return 0;
//   // }
//   // else {
// 	// let total = array.reduce((accumulator, currentValue) =>
//   //   accumulator + currentValue);
//   //   return total;
//   // }
// };

// const multiply = function(...args) {
//   return args.reduce(function (accumulator, currentValue) {
//     return accumulator * currentValue;
//   })
// };
// multiply(2,4);
// multiply(2,4,6,8,10,12,14)

// const power = function(x, y) {
//   return x**y;
// };

// const factorial = function(x) {
//   let total = 1;
//   if(x == 0) {
//     return 1;
//   } else {
//     for(i = 1; i <= x; i++) {
//        total *= i;
//     }
//   }
//   return total;
// };

const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const sum = (array) => {
  let total = 0;
  array.forEach((elem) => {
    total += elem;
  });
  return total;
};
console.log(sum([7, 11]));

const multiply = (...args) => args.reduce((acc, curr) => acc * curr);
console.log(multiply(2, 4, 6, 8, 10, 12, 14));

const power = (x, y) => x ** y;

const factorial = (x) => {
  const newArray = [];
  if (x == 0) {
    return 1;
  }
  for (i = x; i > 0; i--) {
    newArray.push(i);
  }
  return newArray.reduce((prev, curr) => {
    return prev * curr;
  });
};

console.log(factorial(0));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
