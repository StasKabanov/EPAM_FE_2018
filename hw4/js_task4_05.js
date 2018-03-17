function truncateString(str, num) {
  if (typeof str == 'string' && typeof num == 'number') {
    var strLength = str.length,
      resultString = '';
    if (num <= 3) {
      resultString = str.slice(0, num) + '...';
    } else if (num < strLength) {
      resultString = str.slice(0, num - 3) + '...';
    } else resultString = str;
    return resultString;
  } else return 'invalid input data type';
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 11));
console.log(truncateString('abcdefg', 5));
console.log(truncateString('abcdefg', true));
