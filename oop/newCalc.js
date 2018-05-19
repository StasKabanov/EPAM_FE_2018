var calculator = {
    result: 0,
    add: function (x) {
        this.result += x;
    },
    subtract: function (x) {
        this.result -= x;
    },
    divide: function (x) {
        this.result /= x;
    },
    multiply: function (x) {
        this.result *= x;
    },
    getResult: function () {
        return this.result
    },
    reset: function () {
        this.result = 0;
    }

};

var newCalc = {
  result: 0,
  log: function () {
        this.result = Math.log(this.result);
    },
  pow: function (x) {
        this.result = Math.pow(this.result,x);
    },
  getResult: function () {
        var name = prompt('Как вас зовут?', 'Пользователь_1');
        return name+ ", результат равен "+this.result
    },
};

newCalc.__proto__ = calculator;

newCalc.reset();
newCalc.add(3);
newCalc.pow(2);

console.log(newCalc.getResult());





