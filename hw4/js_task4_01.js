var correctString = ' test ',
  incorrectString = 2;

function deleteFirstAndLastSpaces(str) {
  if (typeof str == 'string') {
    return str.trim();
  } else return 'invalid input data type';
}

console.log(deleteFirstAndLastSpaces(correctString));
console.log(deleteFirstAndLastSpaces(incorrectString));
