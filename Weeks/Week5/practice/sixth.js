const express = require("express");
const app = express();

app.use(express.json());

const todos = [
  { id: 1, title: "learn express" },
  { id: 2, title: "build mini APIs" }
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  if (!req.body || !req.body.title) {
    return res.status(400).json({ msg: "Empty body or title not allowed" });
  }

  const newId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
  todos.push({ id: newId, title: req.body.title });

  res.json({ msg: "Todo pushed!" });
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ msg: "Not a valid entry" });
  }

  todos.splice(index, 1);
  res.json({ msg: "Todo successfully deleted!" });
});

app.listen(3000);
