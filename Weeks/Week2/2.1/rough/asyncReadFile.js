const fs = require("fs");

fs.readFile("sample.txt","utf-8",print);
fs.readFile("hi1.txt","utf-8",print);

setTimeout(() => console.log("Big chungus here"),0);

function print(err, data){
    console.log(data);
}