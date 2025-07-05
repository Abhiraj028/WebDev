const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const products = [
  { id: 1, name: "iPhone 13", category: "electronics", price: 89900, rating: 4.7 },
  { id: 2, name: "Galaxy S21", category: "electronics", price: 79900, rating: 4.5 },
  { id: 3, name: "MacBook Air", category: "electronics", price: 119900, rating: 4.8 },
  { id: 4, name: "T-shirt", category: "clothing", price: 250, rating: 4.0 },
  { id: 5, name: "Jeans", category: "clothing", price: 600, rating: 4.3 },
  { id: 6, name: "Running Shoes", category: "clothing", price: 900, rating: 4.6 },
  { id: 7, name: "Blender", category: "home", price: 950, rating: 4.2 },
  { id: 8, name: "Coffee Maker", category: "home", price: 1100, rating: 3.8 },
  { id: 9, name: "Desk Lamp", category: "home", price: 350, rating: 4.1 },
  { id: 10, name: "Book: Atomic Habits", category: "books", price: 200, rating: 4.9 }
];

app.get("/products",(req,res)=>{
    let arr = products;
    let i = 0;
    if(req.query.id){
        arr = arr.filter(e => e.id == req.query.id)
    }
    if(req.query.name){
        arr = arr.filter(e => e.name.toLowerCase() == req.query.name.toLowerCase())
    }
    if(req.query.category){
        arr = arr.filter(e => e.category.toLowerCase() == req.query.category.toLowerCase())
    }
    if(req.query.price){
        arr = arr.filter(e => e.price == req.query.price)
    }
    if(req.query.maxPrice){
        arr = arr.filter(e => e.price < req.query.maxPrice)
    }
    if(req.query.minPrice){
        arr = arr.filter(e => e.price > req.query.minPrice)
    }
    if(req.query.rating){
        arr = arr.filter(e => e.rating == req.query.rating)
    }
    if(req.query.minRating){
        arr = arr.filter(e => e.rating > req.query.minRating)
    }

        res.json(arr);

})

app.listen(3000);