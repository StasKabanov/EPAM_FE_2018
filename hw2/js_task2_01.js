var x = "test";
var result;

function getType(x) {
	if (typeof x === "string") {
		result = "This is a string!";
	} else if (typeof x === "number") {
		result = "This is a number!";
	} else {
		result = "This is not a number or string, this is - " + typeof x + "!";
	}
	return result;
}

console.log(getType(x));
