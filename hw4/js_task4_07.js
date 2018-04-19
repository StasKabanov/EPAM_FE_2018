var primaryString = 'I am cool',
  additionalString = 'very',
  elementNumber = 1;

function insertString(primaryString, additionalString, elementNumber) {
  if (
    typeof primaryString == 'string' &&
    typeof additionalString == 'string' &&
    typeof elementNumber == 'number'
  ) {
    var arrayOfWords = primaryString.split(' ');
    var resultStr = '';
    for (var i = 0; i <= elementNumber; i++) {
      resultStr += arrayOfWords[i] + ' ';
    }
    resultStr += additionalString + ' ';
    for (var i = elementNumber + 1; i < arrayOfWords.length; i++) {
      resultStr += arrayOfWords[i] + ' ';
    }
    return resultStr;
  } else return 'invalid input data type';
}

console.log(primaryString);
console.log(insertString(primaryString, additionalString, elementNumber));
