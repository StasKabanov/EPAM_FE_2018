function preDeleteTextNodes(param) {
    var el = document.querySelector("#" + param);
    deleteTextNodes(el);
}

function deleteTextNodes(el) {
    var i, item,
        elements = el.childNodes,
        elements_length = elements.length - 1;
    for (i = elements_length; i >= 0; i--) {
        item = el.childNodes[i];
        if (item.nodeType === 3) {
            el.removeChild(elements[i]);
        } else {
            deleteTextNodes(item);
        }
    }
    return elements;
}