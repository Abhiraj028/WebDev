const {Command} = require("commander");
const program = new Command();
const fs = require("fs");

program
    .name("ToDo")
    .description("Adds the todo functionality to the CLI")
    .version("1.0.0");

program
    .command("add-todo")
    .description("Adds a todo to the tasks queue")
    .argument("<text>","enter the text to add")
    .action(text => {
        const filePath = "./todos.json";

        fs.readFile(filePath,"utf-8",(err,data)=>{
            const arr = JSON.parse(data);
            arr.push(text);
            data = JSON.stringify(arr);
            fs.writeFile(filePath,data,()=>{
                console.log("Todo Added!");
            })
        })
    })

program
    .command("list-todo")
    .description("list all the available todos")
    .action(()=>{
        const filePath = "./todos.json";
        fs.readFile(filePath,"utf-8",(err,data)=>{
            const arr = JSON.parse(data);
            arr.forEach(element => {
               console.log(element); 
            })
        })
    })

program
    .command("delete-todo")
    .description("deletes the todo at given index")
    .argument("<index>","type the index of the todo to delete")
    .action(num => {
        const filePath = "./todos.json";
        fs.readFile(filePath,"utf-8",(err,data)=>{
            const arr = JSON.parse(data);
            arr.splice(num-1,1);
            data = JSON.stringify(arr);
            fs.writeFile(filePath,data,()=>{
                console.log("Todo Deleted!");
            })
        })
    })

program.parse();