const fs = require("fs");

function readFilePromisified(){
    return new Promise(resolve => {
        fs.readFile("promise_basic.js","utf-8",done);
    
    function done(err,done){
        resolve(done);
    }
    })
}

let p = readFilePromisified().then(main);

function main(ref){
    console.log("The content of the file is: "+ref);
}