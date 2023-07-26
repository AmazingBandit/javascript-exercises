const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(array) {
  if(array.length == 0) {
    return 0; 
  }
  else {
	let total = array.reduce((accumulator, currentValue) => 
    accumulator + currentValue);
    return total;
  }
};

const multiply = function(...args) {
  return args.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
  })
};
multiply(2,4);
multiply(2,4,6,8,10,12,14)

const power = function(x, y) {
  return x**y;
};

const factorial = function(x) {
  let total = 1;
  if(x == 0) {
    return 1;
  } else {
    for(i = 1; i <= x; i++) {
       total *= i; 
    }
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
