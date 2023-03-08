import { promises as fs } from "fs"; 
import pluralize from "pluralize"; 
import express from "express"; 
const app = express(); 

app.get("/", async (req, res) => {
    res.type("html");  
    let fileContents = await fs.readFile("index.html"); 
    res.send(fileContents); 
})

app.get("/style.css", async (req, res) => { 
    res.type("css"); 
    let fileContent = await fs.readFile("style.css"); 
    res.send(fileContent);
})

app.get("/index.js", async (req, res) => { 
    res.type("css"); 
    let fileContent = await fs.readFile("index.js"); 
    res.send(fileContent);
})

app.get("/favicon.ico", async (req, res) => { 
    res.type("png"); 
    let fileContent = await fs.readFile("favicon.ico"); 
    res.send(fileContent);
})

app.get("/pluralize", async (req, res) => { 
    let inputWord = req.query.word; 
    let pluralWord = pluralize(inputWord); 
    res.type("txt"); 
    res.send(pluralWord); 
})

app.listen(3000, () => { 
    console.log("Example app listening at http://localhost:3000/");
}) 

