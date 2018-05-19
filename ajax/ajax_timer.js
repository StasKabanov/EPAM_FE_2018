function timer(ms){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        },ms)
    }).then(function(){
        console.log("я вывелась через " + (ms/1000) + " секунды");
    })
}

console.log("programm is starting");
timer(3000);