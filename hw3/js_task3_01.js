var newObject = {};

console.log('Object without  parametrs:');
console.log(newObject);
newObject.newParam = 'Stas';
newObject.secondParam = 21;
console.log('Object after add new parametrs:');
console.log(newObject);
delete newObject.secondParam;
console.log('Object after delete one parametr:');
console.log(newObject);
