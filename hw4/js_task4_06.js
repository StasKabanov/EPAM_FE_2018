var correctString = 'User Object',
  incorrectString = 2;

function makeCamleCase(str) {
  if (typeof str == 'string') {
    var newStr = str.toLowerCase();
    newStr = newStr.split(' ');
    for (var i = 1; i < newStr.length; i++) {
      newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }
    newStr = newStr.join('');
    return newStr;
  } else return 'invalid input data type';
}

console.log(makeCamleCase(correctString));
console.log(makeCamleCase(incorrectString));
