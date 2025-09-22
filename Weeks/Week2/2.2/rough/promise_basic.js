function resolve(random){
    random();
}

function main(){
    console.log("Gurt: Yo");
}

function Promisify(ms){
    return new Promise(resolve,ms);
}

Promisify(3000).then(main);
