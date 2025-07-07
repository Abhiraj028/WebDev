const mongoose = require("mongoose");
const {Schema} = mongoose;

const userModel = new Schema({
    username: String,
    password: String,
    email:String
})

const adminModel = new Schema({
    username: String,
    password: String,
    email:String
})






module.exports = {
    mongoose
}