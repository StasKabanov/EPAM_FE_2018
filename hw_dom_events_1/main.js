document.addEventListener("DOMContentLoaded", ready);

function ready() {    
    var container = document.getElementById("container");
    console.log(container)
    var currentActive = 0;
    container.onclick = function (event) {
        var target = event.target;
        //console.log(target.tagName);
        if (target.classList.contains("element-title")) {
            var parent = target.parentNode;
            //console.log(currentActive);
            if ((currentActive!=0)&&(currentActive.classList.contains("active"))) {
                currentActive.classList.remove("active");}
            }
        parent.children[1].classList.add("active");
        currentActive = parent.children[1];
        }
    }
