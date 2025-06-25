const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Pyaj";
const users = [];

app.use(express.json());

app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
        if (!users.some(user => user.username === username)) {
            users.push({ username, password });
            res.status(200).json({ msg: "Signed Up Successfully!" });
        } else {
            res.status(409).json({ msg: "Account with this name already exists" });
        }
    } else {
        res.status(400).json({ msg: "Incomplete Credentials Entered" });
    }
});


app.post("/signin",(req,res) =>{
    const username = req.body.username;
    if(users.find(user => user.username == req.body.username && user.password == req.body.password)){
        const token = jwt.sign({username},JWT_SECRET);
        res.json({
            msg:"Signed In Successfully!",
            token:token
        });

    }else{
        res.status(403).json({msg:"Wrong Credentials Entered"});
    }
})

app.get("/arr",(req,res) =>{
    if(users.length == 0){
        res.json({msg: "Empty array"});
    }else{
        res.json(users);
    }
})

app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/public/index.html");
})

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData){
    const user = users.find(user => user.username == decodedData.username);
    req.user = user;
    next();
    }else{
    res.status(304).json({msg:"Invalid credentials"});
    }
}

app.use(auth);

app.get("/me",(req,res) =>{
    res.json({
        username : req.user.username,
        password: req.user.password
    })
})

app.listen(3000);