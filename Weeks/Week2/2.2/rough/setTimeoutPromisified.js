
function main(){
    console.log("bigga");
}

function Promisify(ms){
    return new Promise(resolve =>{
        setTimeout(resolve,ms);
    })
}

let j = Promisify(3000).then(main);