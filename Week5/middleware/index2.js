const express = require("express");
const app = express();


app.use(express.json());

app.post("/posted",(req,res) =>{
    
    const data = req.body;
    
    res.send("done nigo");
})

app.listen(3000);
