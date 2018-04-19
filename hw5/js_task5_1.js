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

calculator.reset();//0
calculator.add(5);//5
calculator.multiply(5);//25
calculator.subtract(5);//20
calculator.divide(2);//10
console.log(calculator.getResult());//10