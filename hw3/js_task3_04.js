var param = 'newProperty',
  newObject = {
    name: 'Stanislav',
    secondName: 'Kabanov',
    age: 21,
  };

function checkObjectProperty(object, property) {
  if (!(property in object)) {
    object[property] = 'new';
  }
  return object;
}

console.log(checkObjectProperty(newObject, param));
