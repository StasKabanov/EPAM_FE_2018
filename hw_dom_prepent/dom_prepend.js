function call() {
    var first = document.createElement("p");
    first.innerHTML = "add text into block ";
    prepend('wrapper',first);
}
function prepend(param1,param2) {
    var wrapper = document.querySelector("#"+param1);
    wrapper.insertBefore(param2,wrapper.firstChild);
}