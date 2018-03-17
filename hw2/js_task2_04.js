var myArray = [1, 1, 1],
	sameElementFlag = true;

function identifierSameElements(array) {
	array.forEach(function(element) {
		if (element !== array[0]) {
			sameElementFlag = false;
		}
	});
	console.log(sameElementFlag);
}

identifierSameElements(myArray);
