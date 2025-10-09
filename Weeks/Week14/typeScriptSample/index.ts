interface People {
    name: string,
    age: number,
    greet: () => string
}

const person: People = {
    name: "Pluh",
    age: 15,
    greet: () => "Ayo Waddup"
}

function idk(person:People):string{
    return "Ayo it's "+person.name+" "+person.greet()
}

console.log(idk(person))

















// interface User {
//     name: string
//     age: number
//     address?: {
//         city: string
//         pinCode: number
//     }
// }

// const user: User = {
//     name: "Pyaj",
//     age: 19,
//     address: {
//         city: "Kullu",
//         pinCode: 175125
//     }
// }

// const user2: User = {
//     name: "Blud",
//     age: 15
// }

// function isLegal(user: User):string{
//     if(user.age > 17){
//         return user.name +" is legal to vote"
//     }
//     return user.name + " is not legal to vote"
// }

// let res = isLegal(user2)
// console.log(res)
// res = isLegal(user)
// console.log(res)