const express = require("express");
const app = express();
const {mongoose} = require("./db");

main();
async function main(){
    await mongoose.connect("mongodb+srv://abhirajgautam:ppILOyd2MNY03XKx@cluster0.atdkzuw.mongodb.net");
    app.listen(3000);
    console.log("listening on port 3000");
}
