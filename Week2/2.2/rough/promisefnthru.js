function Promisify(ms){
    return new Promise((resolve,reject) =>{
        resolve("wow");
    });
};

function main(ref){
    console.log("in main with "+ref);
}

let p = Promisify(2000).then(main);