var param = 'age',
  newObject = {
    name: 'Stanislav',
    secondName: 'Kabanov',
    age: 21,
  };

function checkObjectProperty(Object, property) {
  return property in Object;
}

console.log(checkObjectProperty(newObject, param));
