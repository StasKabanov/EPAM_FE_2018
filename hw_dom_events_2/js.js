function addDiv() {
    //console.log("1");
    var container = document.getElementById("container");
    var element = document.createElement("div"), max = 100, min = 10;
    element.style.position = "absolute";
    element.classList.add("block");
    // element.setAttribute("onclick","myFunc('e')");
    element.style.zIndex = 100;
    element.style.width = Math.floor(Math.random() * (max - min + 1)) + min + "px";
    element.style.height = Math.floor(Math.random() * (max - min + 1)) + min + "px";
    element.style.left = Math.floor(Math.random() * (document.documentElement.clientWidth - 100 + 1)) + 0 + "px";
    element.style.top = Math.floor(Math.random() * (document.documentElement.clientHeight - 100 + 1)) + 0 + "px";
    element.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    // element.onmousedown = function (e) {
    //     console.log(e.pageX);
    // };
    container.appendChild(element);
}


function func() {
    var container = document.getElementById("container");
    container.currentObj;
    container.onmousedown = function (event) {
        console.log(container.currentObj);
        var target = event.target;
        container.currentObj = target;
        container.objtop= target.getBoundingClientRect().top + pageYOffset;
        container.objleft= target.getBoundingClientRect().left + pageYOffset;
        console.log(container.objtop,container.objleft);
        if (target.classList.contains("block")) {
            console.log(target);
        }
    }

    container.onmousemove = function (ev) {
        if (container.currentObj != null) {
            container.currentObj.style.left = ev.pageX + 'px';
            container.currentObj.style.top = ev.pageY + 'px';
        }
    }

    container.onmouseup = function (ev) {
        container.currentObj = null;
    }

    container.ondragstart = function() {return false;}

}



document.addEventListener("DOMContentLoaded", func)
