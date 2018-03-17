var myArray = [1, 3, 5, 0, 3, 8, -1, -4, 0],
  obj = {
    countEvenNumber: 0,
    countOddNumber: 0,
    nullNumber: 0,
  };

function getCountOfEvenAndOddNumbers(array) {
  array.forEach(function(element) {
    if (element === 0) {
      obj.nullNumber++;
    } else if (element % 2 === 0) {
      obj.countEvenNumber++;
    } else {
      obj.countOddNumber++;
    }
  });
  console.log(
    'Even elements - ' +
      obj.countEvenNumber +
      '  Odd elements - ' +
      obj.countOddNumber +
      '  null elements - ' +
      obj.nullNumber
  );
}

getCountOfEvenAndOddNumbers(myArray);
