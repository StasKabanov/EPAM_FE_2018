var xhr;
var result = document.createElement("div");

function httpGet(url) {

    return new Promise(function (resolve, reject) {

        xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}

httpGet('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
    .then(function () {
        var json = xhr.responseText;
        var data = JSON.parse(json);
        var newData = [];
        for (var i = 0; i < data.length; i++) {
            newData.push(data[i].name);
        }
        newData.sort();
        var resultData = newData.join(", ");
        result.innerHTML = resultData;
        var el = document.body;
        el.appendChild(result);
    })