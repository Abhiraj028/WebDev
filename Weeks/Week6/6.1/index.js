const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Pyaj";
const app = express();

let tokenString = "";
let i = 0;

let users = [];



app.get("/",(req,res)=>{
    res.json(users);
})

app.use(express.json());

app.post("/signUp",(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username:username,
        password:password
    });
    res.json({msg:"data uploaded successfully"});
})

app.post("/signIn", (req, res) => {
    const user = users.find(u => u.username === req.body.username && u.password == req.body.password);

    if (user) {
        const token = jwt.sign({username:user.username},JWT_SECRET);
        user.token = token;
        res.json({msg: "ong you in the deep secret club cuh, this yo token foo",
                  token:user.token
        });
    } else {
        res.status(403).json({ msg: "invalid data" });
    }
});

app.get("/me",(req,res) => {
    const token = req.headers.token;
    const user = jwt.verify(token,JWT_SECRET);
    if(user){
        const full = users.find(u => u.username == user.username);
        res.json({
            username:full.username,
            password:full.password
        });
    }else{
        res.status(403).json({msg:"invalid data"});
    }
})

app.listen(3000);