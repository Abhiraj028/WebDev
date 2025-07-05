const express = require("express");
const app = express();

const articles = [
  { id: 1, title: "Intro to JS", tags: ["js", "beginner"] },
  { id: 2, title: "CSS Tricks", tags: ["css", "design"] },
  { id: 3, title: "Advanced JS", tags: ["js", "advanced"] },
  { id: 4, title: "UI Basics", tags: ["ui", "beginner"] },
  { id: 5, title: "React Overview", tags: ["js", "react"] },
  { id: 6, title: "Design Systems", tags: ["design", "ui"] }
];

app.get('/articles',(req,res) => {
    let arr = articles;
    if(req.query.tag){
        arr = arr.filter(e => e.tags.includes(req.query.tag));
    }
    if(arr.length == 0){
        return res.status(404).json({msg:"nothing found"})
    }
    res.json(arr);
})

app.listen(3000);

