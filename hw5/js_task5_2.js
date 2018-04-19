var sum = function (x) {
    return function (y) {
        return x + y;
    };
};

console.log(sum(1)(4));
