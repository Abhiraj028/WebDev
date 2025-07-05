function Promisify(){
    return new Promise(fn1);
}

function fn1(resolve){
    resolve("dawg");
}

function main(ref){
    console.log("in main with "+ref);
}

let p = Promisify().then(main);