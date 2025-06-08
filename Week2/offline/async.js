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
async function run(){
    try{
        const data = await readFilePromisified();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

run();