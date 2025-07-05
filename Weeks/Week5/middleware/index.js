const express = require("express");
const app = express();

function middleware(req,res,next){
    console.log("the request was sent to "+req.url);
    next();
}


app.get("/simple",(req,res) =>{
    res.json({
        function: "no middleware was used here"
    })
})

app.use(middleware);

app.get("/special",(req,res) => {
    res.json({
        function: "middleware was used here!"
    })
})

app.listen(3000);

