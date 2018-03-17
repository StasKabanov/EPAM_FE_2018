var myNumber = -2;

function identifyTypeOfNumber(number) {
    var primeNumber;
    if (number >= 1 && number <= 1000 && typeof number === "number") {
        if (number % 2 == 0 && number != 2) {
            primeNumber = false;
        } else if (number == 2) {
            primeNumber = true;
        } else {
            k = Math.round(Math.sqrt(number));
            flag = false;
            for (i = 2; i < k + 1; i++) {
                if (number % i == 0) {
                    primeNumber = false;
                    flag = true;
                    break;
                }
            }
            if (flag == false) {
                primeNumber = true;
            }
        }
    } else console.log("incorrectly entered data");

    return primeNumber;
}

console.log(identifyTypeOfNumber(myNumber));
