const express = require("express");
const app = express();

function auth(req,res,next){
    if(req.headers.authorization){
        console.log("Authorised User, Request Accepted");
        next();
    }else{
        res.status(403).json({msg:"Access denied"});
    }
}

app.get("/public",(req,res)=>{
    res.json({
        msg: "this route is public"
    })
})

app.use(auth);

app.get("/private",(req,res) => {
    res.json({
        msg:"inside private lmao xD"
    })
})

app.listen(3000);