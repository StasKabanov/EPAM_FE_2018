function scanDOM() {
    var node = '*', elemAll = document.getElementsByTagName("*"),
        myNode = document.querySelector(node);

    var className = {},
        tagName = {},
        textNodeCount = 0;

    for (var i = 0; i < elemAll.length; i++) {
        if (elemAll[i].getAttribute('class') != undefined) {
            if (className[elemAll[i].getAttribute('class')]) {
                className[elemAll[i].getAttribute('class')]++;
            } else {
                className[elemAll[i].getAttribute('class')] = 1;
            }
        }
        if (elemAll[i].tagName != undefined) {
            if (tagName[elemAll[i].tagName.toLocaleLowerCase()]) {
                tagName[elemAll[i].tagName.toLocaleLowerCase()]++;
            } else {
                tagName[elemAll[i].tagName.toLocaleLowerCase()] = 1;
            }

        }
    }

    textNodeCounter(myNode);

    function textNodeCounter(myNode) {

        for (var i = 0; i < myNode.childNodes.length; i++) {
            if (myNode.childNodes[i].nodeType == Node.TEXT_NODE) {
                textNodeCount++;
            }
        }

        for (var k = 0; k < myNode.children.length; k++) {
            if (myNode.children[k].childNodes.length > 1) {
                textNodeCounter(myNode.children[k]);
            }
        }

        return textNodeCount;
    }

    for (var elem in className) {
        console.log("Элементов с классом " + elem + ": " + className[elem]);
    }
    for (var elem in tagName) {
        console.log("Тэгов " + elem + ": " + tagName[elem]);
    }
    console.log("Текстовых узлов: " + textNodeCount);
}


//document.addEventListener("DOMContentLoaded",scanDOM());