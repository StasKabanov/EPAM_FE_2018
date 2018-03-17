function getRandomInt() {
  var min = 0,
    max = 100;
  return +(Math.random() * (max - min) + min).toFixed(0);
}

console.log(getRandomInt());
console.log(typeof getRandomInt());
