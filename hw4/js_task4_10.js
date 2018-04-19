var firstParam = 3.455,
  secondParam = 4.55;

function sumNumbers(arg1, arg2) {
  if (typeof arg1 == 'number' && typeof arg2 == 'number') {
    return +(arg1 + arg2).toFixed(3);
  } else return 'invalid input data type';
}

console.log(sumNumbers(firstParam, secondParam));
console.log(typeof sumNumbers(firstParam, secondParam));
