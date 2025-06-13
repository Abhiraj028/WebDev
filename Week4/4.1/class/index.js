

const {Command} = require("commander");
const program = new Command();
const fs = require("fs");

program
    .name("wordStuff")
    .description("First iteration of the nigga school of thought")
    .version("1.0.0");

program
    .command("words")
    .description("counts the number of words in a file")
    .argument("<file>","file to count")
    .action((file)=>{
        fs.readFile(file,"utf-8",(err,data)=>{
            if(err){
                return console.log("error");
            }
            const words = data.split(" ").length;
            console.log("Total words in the file are: "+words);
        })
    });

program
    .command("lines")
    .description("counts the number of lines in a file")
    .argument("<file>","file to count")
    .action((file)=>{
        fs.readFile(file,"utf-8",(err,data)=>{
            if(err){
                return console.log("error");
            }
            const length = data.split("\n").length;
            console.log("Total lines in the file are: "+length);
        })
    });

program
    .command("respect")
    .description("enough racist connotations, please show some respect")
    .action(()=>{
        console.log("Respect Respect");
    })

program.parse();

