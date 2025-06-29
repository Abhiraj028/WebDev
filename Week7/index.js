const express = require("express");
const app = express();
const {userModel, todoModel } = require("./db.js");
const { default: mongoose, mongo } = require("mongoose");
mongoose.connect("mongodb+srv://abhirajgautam:ppILOyd2MNY03XKx@cluster0.atdkzuw.mongodb.net/wow");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "blud";

app.use(express.json());

app.post("/signup",async (req,res) =>{
    try{
        const username = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        if (!username || !email || !password) {
            return res.status(400).json({ msg: "Missing required fields" });
        }

        await userModel.create({
            name: username,
            email,
            password
        })
        res.json({msg:"Signed Up Successfully!"});
    }catch(e){
        res.status(400).json({msg:"error occured "+e.message});
    }
})

app.post("/login",async (req,res) => {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({ msg: "Missing required fields" });
        }

        const user = await userModel.findOne({email,password});

        if(user){
            const token = jwt.sign({id:user._id.toString()},JWT_SECRET);
            res.json({msg:token});
        }else{
            res.status(400).json({error:"user not found ig?"});
        }
})


function auth(req,res,next){
    try{
        const token = req.headers.token;
        const response = jwt.verify(token,JWT_SECRET);
        req.userId = response.id;
        next();
    }catch(e){
        res.status(400).json({msg:"invalid credentials"});
    }
}

app.use(auth);

app.post("/todo",async (req,res) => {
    try{
        await todoModel.create({
        UserId : req.userId,
        todo: req.body.todo,
        done: false
        })
        res.json({msg:"Todo added successfully!"});
        
    }catch(e){
        res.status(400).json({msg:"error dawg"});
    }
})

app.get("/todos",async (req,res) =>{
    try{
       const text = await todoModel.find({UserId : req.userId});
       const todos = text.map(item => item.todo);    
       res.json(todos);
    }catch(e){
        res.status(400).json({msg:"invalid credentials"});
    }
})



app.listen(3000);