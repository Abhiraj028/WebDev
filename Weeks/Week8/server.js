const express = require("express");
const app = express();
const mongoose = require("mongoose");



async function main(){
    
}
await mongoose.connect(process.env.mongooseLink);
app.listen(3000);