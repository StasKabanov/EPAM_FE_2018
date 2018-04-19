var correctString = "I'm a little tea pot",
  incorrectString = 2;

function titleCase(str) {
  if (typeof str == 'string') {
    var newStr = str.toLowerCase();
    newStr = newStr.split(' ');
    for (var i = 0; i < newStr.length; i++) {
      newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }
    newStr = newStr.join(' ');
    //console.log(newStr);
    return newStr;
  } else return 'invalid input data type';
}

console.log(titleCase(correctString));
console.log(titleCase(incorrectString));
