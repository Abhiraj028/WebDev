function sum(num1,num2){
    return num1+num2;
}

let num = sum("9","10");
console.log("Sending Strings 9 and 10:")
console.log(num);

let num1 = sum(9,10);
console.log("Sending number 9 and 10:")
console.log(num1);

console.log("///////////////////////////////////////////////");
function canVote(age){
    if(age >= 18){
        return "VOTE NIGGA VOTE";
    }
    return "dont vote please";
}

let age = canVote(18);
console.log("Age of the dood is 18:");
console.log(age);

let age1 = canVote(15);
console.log("Age of the dood is 15:");
console.log(age1);

console.log("///////////////////////////////////////////////");

let num5 = 5;
let sum5 = 0;
for(let i = 1;i<=5;i++){
    sum5 += i;
}
console.log("The number is 5 dawg:");
console.log(sum5);

console.log("///////////////////////////////////////////////");
console.log("///////////////////////////////////////////////");

