var correctString = ' abtrsrab',
  incorrectString = 2;

function calsCountOfEachOfTheUniqueSymbols(str) {
  if (typeof str == 'string') {
    var resultString = '',
      intermediateString = '';
    str = str.trim();
    for (var i = 0; i < str.length; i++) {
      if (!intermediateString.includes(str.charAt(i))) {
        var re = new RegExp(str.charAt(i), 'g');
        resultString += str.charAt(i) + ':' + str.match(re).length + ', ';
        intermediateString += str.charAt(i);
      }
    }
    return resultString;
  } else return 'invalid input data type';
}

console.log(correctString);
console.log(calsCountOfEachOfTheUniqueSymbols(correctString));
console.log(incorrectString);
console.log(calsCountOfEachOfTheUniqueSymbols(incorrectString));
