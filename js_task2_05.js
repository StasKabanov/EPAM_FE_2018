var myArray = ["te", 2, "tets", -1, 4, 9, 10, -5, 0, 11];

function identifierMaxElement(array) {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            array.splice(i, 1);
        }
    }

    var maxElement = array[0];
    array.forEach(function(element) {
        if (element >= maxElement) {
            maxElement = element;
        }
    });
    return maxElement;
}

console.log(myArray);
console.log("max element - " + identifierMaxElement(myArray));
