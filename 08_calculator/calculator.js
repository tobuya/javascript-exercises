const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
	return array.reduce((total, current) => total + current,0)
};

const multiply = function(array) {
  return array.reduce((accumulator, nextItem) => accumulator * nextItem, 1)
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--){
    product *= i;
  }
  return product;
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
