let p = new Promise((resolve,reject) => {
    setTimeout(resolve,5000);
})

p.then(main);

function main(){
    console.log("BING CHILLING");
}