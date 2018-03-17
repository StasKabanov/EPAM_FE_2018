var myArray = ["2", "3", "7", "7"];

function arrayPrinter(array) {
	array.forEach(function(element) {
		console.log(element);
	});
	console.log("Count elements: " + array.length);
	return;
}

arrayPrinter(myArray);
