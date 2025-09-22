const fs = require("fs");

function readFilePromisified(){
    return new Promise((resolve,reject) =>{
        fs.readFile("CallbackHell.js","utf-8",(err,data)=>{
            if(err)
                reject(err);
            else
                resolve(data);
        })
    })
}

let wow = readFilePromisified()
.then(main)
.catch(err => console.log("ERROR CAUGHT TRING TRING "+err));

function main(ref){
    console.log("The data is: "+ref);
}