const fs = require("fs").promises; 
const express = require("express"); 
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

app.get("/getTime", async (req, res) => { 
    let time = new Date(); 
    res.type("txt"); 
    res.send(time); 
})

app.listen(3000, () => { 
    console.log("Example app listening at http://localhost:3000/");
}) 

