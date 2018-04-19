var correctString = '  test ',
  incorrectString = 2;

function reverseString(str) {
  if (typeof str == 'string') {
    return str
      .trim()
      .split('')
      .reverse()
      .join('');
  } else return 'invalid input data type';
}

console.log(reverseString(correctString));
console.log(reverseString(incorrectString));
