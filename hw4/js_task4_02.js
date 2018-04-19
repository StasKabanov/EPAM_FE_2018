var correctString = ' test ',
  incorrectString = 2;

function deleteFirstAndLastSpaces(str) {
  if (typeof str == 'string') {
    var resultString = str.trim();
    return resultString.charAt(0).toUpperCase() + resultString.slice(1);
  } else return 'invalid input data type';
}

console.log(deleteFirstAndLastSpaces(correctString));
console.log(deleteFirstAndLastSpaces(incorrectString));
