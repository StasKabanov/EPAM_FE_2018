
var newObject = {
  name: 'Stanislav',
  secondName: 'Kabanov',
  age: 21
};

function outputObject(object) {
  console.log('Object keys:');
  for (var key in object) {
    console.log(key);
  }
  console.log('Object value of parametrs:');
  for (var key in object) {
    console.log(object[key]);
  }
}

outputObject(newObject);
