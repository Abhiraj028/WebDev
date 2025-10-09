interface User {
    name: string,
    age: number
}

function addAge(a:User,b:User):number{
    return a.age + b.age
}

console.log(addAge({name:"Pyaj",age:12},{name:"Plug",age:22}))