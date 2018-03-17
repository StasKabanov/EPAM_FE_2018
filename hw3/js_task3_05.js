var object = {
    name: 'Stanislav',
    secondName: 'Kabanov',
    age: 21,
  },
  newObject = {};

function copyObject(object) {
  newObject = Object.assign(newObject, object);
  return newObject;
}

console.log(copyObject(object));
