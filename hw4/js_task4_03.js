var correctString = 'I love cats',
  subString = 'cats',
  incorrectString = 2;

function checkSubStringInString(str, substr) {
  if (typeof str == 'string') {
    return str.includes(substr);
  } else return 'invalid input data type';
}

console.log(checkSubStringInString(correctString, subString));
console.log(checkSubStringInString(incorrectString, subString));
