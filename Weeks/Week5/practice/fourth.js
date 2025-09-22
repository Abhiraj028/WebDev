const express = require("express");
const app = express();

const drinks = [
  { id: 1, name: "Lemonade", type: "cold" },
  { id: 2, name: "Iced Tea", type: "cold" },
  { id: 3, name: "Cold Coffee", type: "cold" },
  { id: 4, name: "Hot Chocolate", type: "hot" },
  { id: 5, name: "Masala Chai", type: "hot" },
  { id: 6, name: "Americano", type: "hot" },
  { id: 7, name: "Mojito", type: "cold" },
  { id: 8, name: "Green Tea", type: "hot" }
];

function Randomiser(max) {
  return Math.floor(Math.random() * max);
}

app.get("/drink", (req, res) => {
  let filtered = drinks;

  if (req.query.type) {
    const type = req.query.type.toLowerCase();
    filtered = drinks.filter(e => e.type === type);
  }

  if (filtered.length === 0) {
    return res.status(404).json({ msg: "No drinks of that type" });
  }

  res.json(filtered[Randomiser(filtered.length)]);
});

app.listen(3000);
