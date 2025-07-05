// setTimeout(() =>{
//     console.log("hi");
//     setTimeout(() =>{
//         console.log("hello");
//         setTimeout(()=>{
//             console.log("hello there");
//         },5000)
//     },3000)
// },1000);

function Promisee(duration){
    return new Promise(resolve => {
        setTimeout(resolve,duration);
    });
};

Promisee(1000).then(() =>{
    console.log("hi");
    return Promisee(3000);
}).then(() =>{
    console.log("hello");
    return Promisee(5000);
}).then(() =>{
    console.log("Hello there");
})