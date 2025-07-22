import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/")
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const todo = new Todo({title:"Hey First task", desc:"Description of the task", isDone: false});
    todo.save()
    let siteName = "Nike"
    let searchText = "Search Now"
    let arr = ["Hey", "Hello"]
  res.render("index",{siteName:siteName, searchText:searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "It's a very good brand"
    res.render("blogpost",{blogTitle:blogTitle, blogContent:blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
