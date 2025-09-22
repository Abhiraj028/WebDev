const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

function Randomiser() {
  return Math.floor(Math.random() * (101 - 0 + 1)) + 0;
}

function logger(req,res,next){
    console.log({
        method:req.method,
        url:req.url,
        timestamp:new Date()
    })
    next();
}

app.use(logger);

app.get("/quote",async (req,res) => {
    const data = await fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    const dataConverted = await data.json();
    res.json({
        quote: dataConverted.quotes[Randomiser()].quote
    })
})


app.listen(3000);