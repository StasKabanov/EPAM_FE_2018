var object = {
    name: 'Stanislav',
    secondName: 'Kabanov',
    test: { p1: null, p2: { pp3: 'qqq', pp4: 'www' } },
  },
  newObject = {};

function copyObject(object1, object2) {
  for (var key in object2) {
    if (typeof object2[key] != 'object') {
      object1[key] = object2[key];
    } else if (object2[key] == null) {
      object1[key] = null;
    } else {
      object1[key] = {};
      copyObject(object1[key], object2[key]);
    }
  }
}

copyObject(newObject, object);

/*test*/
object['test']['p2']['pp4'] = 'zzz';
console.log(object['test']['p2']['pp4']);
console.log(newObject['test']['p2']['pp4']);
console.log(newObject);
