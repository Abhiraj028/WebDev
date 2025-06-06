const fs = require("fs");

const text = fs.readFileSync("./sample.txt","utf-8");
const text2 = fs.readFileSync("./hi.txt","utf-8");

console.log(text);
console.log(text2);