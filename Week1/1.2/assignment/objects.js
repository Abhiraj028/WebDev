function userTaker(user){
    if(user.age >= 18){
            console.log("hello! "+user.name+" who is "+user.age+" years old!..... VOTE NIGGA");
    }else{
        console.log("hello! "+user.name+" who is "+user.age+" years old!..... Leave the voting booth kindly!!!!");
    }
}

let user = {
    name:"nigender",
    age:15
};

console.log("//////////////////////////////////////////////");

userTaker(user);

let user2 = {
    name:"balwant singh",
    age: 56,
    gender: "Jaatt"
};

function userTaker2(user){
    if(user.age >= 18){
            console.log("hello! pahalwan sahab "+user.name+" who is "+user.age+" years old!..... VOTE NIGGA");
    }else{
        console.log("hello! pahalwan sahab "+user.name+" who is "+user.age+" years old!..... Leave the voting booth kindly!!!!");
    }
}
userTaker2(user2);

console.log("//////////////////////////////////////////////");

let num = [3,6,78,245,7643,7,2376,23475,123,56];

let res = num.filter((singleNum)=>{
                if(singleNum%2==0){
                    return true;
                }
          });

          console.log(res);


console.log("//////////////////////////////////////////////");

let userArray = [{name:"blud",age:19},{name:"clug",age:20},{name:"trug",age:15}];

function ageAgain(arr){
    console.log(arr.filter((obj) => {
        if(obj.age >= 18){
            return true;
        }
    }))
}

ageAgain(userArray);

console.log("//////////////////////////////////////////////");

let userArray1 = [{name:"blud",age:19,gender:"male"},{name:"clug",age:20,gender:"female"},{name:"trug",age:15,gender:"dlug"}];

function ageAgain1(arr){
    console.log(arr.filter((obj) => obj.age >= 18 && obj.gender == "dlug"));
}

ageAgain1(userArray1);
