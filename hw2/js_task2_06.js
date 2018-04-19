var myArray = [2, '10', -1, 4, 9, '10', -5, '0', 11];

function convertStringElementsToNumber(array) {
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] == 'string') {
      array[i] = parseInt(array[i]);
    }
  }

  return array;
}

console.log(myArray);
console.log(convertStringElementsToNumber(myArray));
