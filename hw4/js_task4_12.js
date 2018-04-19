var minNumber = 1,
  maxNumber = 5;

function getRandomInt(min, max) {
  if (typeof min == 'number' && typeof max == 'number') {
    return +(Math.floor(Math.random() * (max - min + 1)) + min);
  } else return 'invalid input data type';
}

console.log(getRandomInt(minNumber, maxNumber));
console.log(typeof getRandomInt(minNumber, maxNumber));
