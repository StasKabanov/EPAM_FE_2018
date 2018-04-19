var primaryString = 'I am cool',
    additionalString = 'very',
    elementNumber = 1;

function insertString(primaryString, additionalString, elementNumber) {
    if (
        typeof primaryString == 'string' &&
        typeof additionalString == 'string' &&
        typeof elementNumber == 'number'
    ) {
        primaryString = primaryString.split(' ');
        primaryString.splice(elementNumber + 1, 0, additionalString);
        return primaryString.join(' ');
    } else return 'invalid input data type';
}

console.log(primaryString);
console.log(insertString(primaryString, additionalString, elementNumber));

/*____last solution_____*/
/*function insertString(primaryString, additionalString, elementNumber) {
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
*/
