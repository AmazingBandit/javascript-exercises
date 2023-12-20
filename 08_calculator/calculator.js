//adding two numbers
const add = (x, y) => x + y;

//subtracting two numbers
const subtract = (x, y) => x - y;

//adding all numbers in array
const sum = (array) => {
  let total = 0;
  array.forEach((elem) => {
    total += elem;
  });
  return total;
};

//multiply all numbers
const multiply = (...args) => args.reduce((acc, curr) => acc * curr);
console.log(multiply(2, 4, 6, 8, 10, 12, 14));

//power first number by second number times
const power = (x, y) => x ** y;

//finding factorial of number
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

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
